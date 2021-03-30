import { bindable, autoinject, TaskQueue } from 'aurelia-framework';
// ここから
import { IBasePickerSuggestionsProps, ValidationState } from '@fluentui/react/lib/Pickers';
import { PickerItem } from './picker-item';
// ここまで

// todo: メソッド名が適切か見直す
@autoinject
export class StPicker {
  // 選択肢
  @bindable selections: PickerItem[] = []
  // 選択されたアイテム
  @bindable selectedItems: PickerItem[] = []

  constructor(private element: Element, private taskQueue: TaskQueue) {

  }

  // コントロール側で選択されたものが変更されたらJSの配列にも反映する
  // checked
  public onChange(items: PickerItem[])
  {
    this.selectedItems = items.map(item => Object.assign({}, item));
    this.doColor();
  }

  attached() {
    this.taskQueue.queueMicroTask({
      call: () => this.doColor()
    });
  }

  private doColor() {
    this.element.querySelectorAll(".ms-PickerPersona-container").forEach(element => {
      const tooltipHostElement = element.querySelector(".ms-TooltipHost");
      const elementText = tooltipHostElement?.innerHTML;
      const targetSelection = this.selections.find(selection => selection.text == elementText);
      (element as HTMLElement).style.backgroundColor = targetSelection?.backgroundColor || 'transparent';
      (tooltipHostElement as HTMLElement).style.color = targetSelection?.color || 'black';
      (element.querySelector("button") as HTMLElement).style.color = targetSelection?.color || 'black';
    })
  }

  // ここで返したやつがonChangeを経由してselectedItemsに入る
  // checked
  private onItemSelected(item: PickerItem): Promise<PickerItem> 
  {
    return new Promise<PickerItem>((resolve, reject) => setTimeout(() => resolve(item), 250));
  }

  // サジェスチョンに出す一覧
  // checked
  private _onFilterChanged(filterText: string,
    currentItems: PickerItem[],
    ): PickerItem[] | Promise<PickerItem[]> 
  {
    // 何かタイプされてた場合
    if (filterText) 
    {
      return this.removeDuplicates(this.filterByText(filterText), currentItems)
    } 
    else 
    {
      return []
    }
  }

  // OK
  // checked
  suggestionProps: IBasePickerSuggestionsProps = 
  {
      noResultsFoundText: '（結果はありません）',
      showRemoveButtons: false,
  };

  inputProps = {
    placeholder: '（ここに入力）'
  }

  // OK
  // checked
  private _onEmptyInputFocus(currentItems: PickerItem[]): PickerItem[] | Promise<PickerItem[]>
  {
    return this.removeDuplicates(this.selections, currentItems)
  }


    // 選択肢をタイプされたテキストで絞る（大文字小文字を区別しない）
    // checked
    private filterByText(filterText: string): PickerItem[] 
    {
      return this.selections.filter(item => item.text.toLowerCase().indexOf(filterText.toLowerCase()) === 0);
    }

    // ダブりを除いたリストを取得
    private removeDuplicates(baseList: PickerItem[], removeList: PickerItem[]) 
    {
      return baseList.filter(item => !removeList.some(removeItem => item.key == removeItem.key))      
    }

    // 手入力の場合のバリデーション
    private _validateInput(input: string): ValidationState
    {
      if (this.selections.some(item => item.text == input) && !this.selectedItems.some(item => item.text == input)) {
        return ValidationState.valid;
      } else {
        return ValidationState.invalid;
      }
    };

    // 選択肢からテキストを取り出す
    private _getTextFromItem(persona: PickerItem): string {
      return persona.text;
    }
}
