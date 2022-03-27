import { bindable, autoinject, TaskQueue } from 'aurelia-framework';
import { IBasePickerSuggestionsProps, ValidationState } from '@fluentui/react/lib/Pickers';
import { PickerItem } from './picker-item';

// Picker（メインタイプとかオブジェクトクラスとか選ぶアレ）
@autoinject
export class StPicker {

  @bindable selections:    PickerItem[] = []; // 選択肢
  @bindable selectedItems: PickerItem[] = []; // 選択されたもの

  // DI用コンストラクタ
  constructor(private element: Element, private taskQueue: TaskQueue) {}

  // コントロール側で選択されたものが変更されたらJSの配列にも反映する
  public onChange(items: PickerItem[])
  {
    this.selectedItems = items.map(item => Object.assign({}, item));
    this.doColor();
  }

  // DOMにアタッチされた時の処理（Aureliaのライフサイクル）
  attached() {
    this.taskQueue.queueMicroTask({
      call: () => this.doColor()
    });
  }

  // 選択肢に色を付ける
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
  private onItemSelected(item: PickerItem): Promise<PickerItem> 
  {
    return new Promise<PickerItem>((resolve, reject) => setTimeout(() => resolve(item), 250));
  }

  // サジェスチョンに出す一覧
  private _onFilterChanged(filterText: string,
    currentItems: PickerItem[],
    ): PickerItem[] | Promise<PickerItem[]> 
  {
    // 何かタイプされてた場合
    if (filterText) {
      return this.removeDuplicates(this.filterByText(filterText), currentItems);
    } 
    else {
      return [];
    }
  }

  // サジェスト
  suggestionProps: IBasePickerSuggestionsProps = 
  {
      noResultsFoundText: '（結果はありません）',
      showRemoveButtons: false,
  };

  // 入力欄
  inputProps = {
    placeholder: '（ここに入力）'
  };

  // 何も入れていないときにフォーカスした場合？（viewとバインド）
  private _onEmptyInputFocus(currentItems: PickerItem[]): PickerItem[] | Promise<PickerItem[]>
  {
    return this.removeDuplicates(this.selections, currentItems);
  }

  // 選択肢をタイプされたテキストで絞る（大文字小文字を区別しない）
  private filterByText(filterText: string): PickerItem[] 
  {
    return this.selections.filter(item => item.text.toLowerCase().indexOf(filterText.toLowerCase()) === 0);
  }

  // ダブりを除いたリストを取得
  private removeDuplicates(baseList: PickerItem[], removeList: PickerItem[]) 
  {
    return baseList.filter(item => !removeList.some(removeItem => item.key == removeItem.key));
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
