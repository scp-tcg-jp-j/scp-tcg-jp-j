import { SortOptions } from './../constants/sort-options';
import { PagerOptions } from './../constants/pager-options';
import { ProjectionPickerItems } from './../constants/projection-picker-items';
import { MaintypePickerItems } from './../constants/maintype-picker-items';
import { SubtypePickerItems} from './../constants/subtype-picker-items';
import { OcPickerItems } from '../constants/oc-picker-items';
import { PickerItem } from 'controls/st-picker/picker-item';
import { IDropdownOption } from '@fluentui/react/lib/Dropdown';
import environment from '../environment';
import {computedFrom} from 'aurelia-framework';
import { Card } from 'models/card';

export class StSearch {
  
  // Viewとのバインドここから
  // コントロール用（選択肢など）
  maintypePickerItems = MaintypePickerItems;
  subtypePickerItems = SubtypePickerItems;
  ocPickerItems = OcPickerItems;
  projectionPickerItems = ProjectionPickerItems;
  pagerOptions = PagerOptions;
  sortOptions = SortOptions;
  // ユーザー入力値
  selectedMaintypes: PickerItem[] = MaintypePickerItems; // メインタイプ
  selectedSubtypes: PickerItem[] = []; // サブタイプ
  selectedObjectClasses: PickerItem[] = OcPickerItems; // オブジェクトクラス
  attackMin: string = ''; // 確保力（最小）
  attackMax: string = ''; // 確保力（最大）
  attackSpecial: boolean = false // 確保力無限大または無し
  onChangeAttackSpecial(event:any, isChecked: boolean) {
    this.attackSpecial = isChecked;
  }
  costMin: string = ''; // コスト（最小）
  costMax: string = ''; // コスト（最大）
  costSpecial: boolean = false; // コスト無限大または無し
  onChangeCostSpecial(event:any, isChecked: boolean) {
    this.costSpecial = isChecked;
  }
  cardName: string = ''; // カード名
  effect: string = ''; // 効果
  tags: string = ''; // タグ
  banned: boolean = false; // 永久収容
  onChangeBanned(event:any, isChecked: boolean) {
    this.banned = isChecked;
  }
  showResultOption: boolean = false; // 表示設定
  onChangeShowResultOption(event: any, isChecked: boolean) {
    this.showResultOption = isChecked;
  }
  selectedProjections: PickerItem[] = ProjectionPickerItems; // 表示項目
  selectedPagerOption = PagerOptions[0].key; // 1ページに表示する件数
  onChangePager(event: any, option: { key: string }, index?: number) {
    this.selectedPagerOption = option.key;
  }
  selectedSortOption = SortOptions[0].key; // ソート順。カード名昇順
  onChangeSort(event: any, option: { key: string }, index?: number) {
    this.selectedSortOption = option.key;
    this.currentQuery.sort = this.sortOptions.find(selection => selection.key == option.key)?.key;
    this.currentQuery.page = 0;
    const body = JSON.stringify(this.currentQuery)
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/search_cards", { method: 'POST', body: body, headers: headers, mode: 'cors' })
    .then(response => response.json())
    .then(json => { this.cards = json.cards; this.count = json.count; this.reRender++; })
    .catch(reason => this.message = JSON.stringify(reason));
  }
  // 強制再レンダリング用
  reRender = 0;
  @computedFrom('reRender')
  get isFirstPage() {
    return this.currentQuery.page == 0;
  }
  @computedFrom('reRender')
  get isLastPage() {
    if (this.currentQuery.pageSize == '') {
      return true;
    }
    return Number.parseInt(this.currentQuery.pageSize) * (this.currentQuery.page + 1) > this.count;
  }
  @computedFrom('reRender')
  get lastPage() {
    return Math.floor((this.count - (this.count % this.currentQuery.pageSize ? 1 : 0)) / this.currentQuery.pageSize);
  }

  submitPageFirst() {
    this.currentQuery.page = 0;
    const body = JSON.stringify(this.currentQuery);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/search_cards", { method: 'POST', body: body, headers: headers, mode: 'cors' })
    .then(response => response.json())
    .then(json => { this.cards = json.cards; this.count = json.count; this.reRender++; })
    .catch(reason => this.message = JSON.stringify(reason));
  }
  submitPagePrevious() {
    this.currentQuery.page -= 1;
    const body = JSON.stringify(this.currentQuery);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/search_cards", { method: 'POST', body: body, headers: headers, mode: 'cors' })
    .then(response => response.json())
    .then(json => { this.cards = json.cards; this.count = json.count; this.reRender++; })
    .catch(reason => this.message = JSON.stringify(reason));
  }
  submitPageNext() {
    this.currentQuery.page += 1;
    const body = JSON.stringify(this.currentQuery);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/search_cards", { method: 'POST', body: body, headers: headers, mode: 'cors' })
    .then(response => response.json())
    .then(json => { this.cards = json.cards; this.count = json.count; this.reRender++; })
    .catch(reason => this.message = JSON.stringify(reason));
  }
  submitPageLast() {
    this.currentQuery.page = Math.floor(this.count / this.currentQuery.pageSize) - (this.count % this.currentQuery.pageSize == 0 ? 1 : 0);
    const body = JSON.stringify(this.currentQuery);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/search_cards", { method: 'POST', body: body, headers: headers, mode: 'cors' })
    .then(response => response.json())
    .then(json => { this.cards = json.cards; this.count = json.count; this.reRender++; })
    .catch(reason => this.message = JSON.stringify(reason));
  }
  // Viewとのバインドここまで
  currentQuery: any = null; // 現在のクエリ（ページャ用）
  count: number = 0; // 最大件数（ページャ用）

  async submitSearch() {

    let query = {};
    // クエリ組み立てここから
    
    // メインタイプ（選ばれたものうちいずれかを含むものを検索対象とする）
    Object.assign(query, { 'maintypes': this.selectedMaintypes.map(maintype => maintype.text) });
    // サブタイプ（選ばれたもののうちいずれかを含むものを検索対象とする）
    Object.assign(query, { 'subtypes': this.selectedSubtypes.map(subtype => subtype.text) });
    // カード名（スペース区切り）
    const cardName = this.cardName.replace('　', ' ').split(' ').map(flagment => flagment.trim()).filter(flagment => flagment);
    if (cardName.length != 0) {
      Object.assign(query, { 'cardName': cardName });
    }
    // 効果（スペース区切り）
    const effect = this.effect.replace('　', '').split(' ').filter(flagment => flagment);
    if (effect.length != 0) {
      Object.assign(query, { 'effect': effect });
    }
    // 永久収容
    Object.assign(query, { 'banned': this.banned });
    // オブジェクト特有の項目
    if (this.selectedMaintypes.some(maintype => maintype.key == 1)) {
      // OC（選ばれたもののうちいずれかを含むものを検索対象とする）
      Object.assign(query, { 'oc': this.selectedObjectClasses.map(oc => oc.text) });
      // 確保力（最小）
      if (this.attackMin) {
        Object.assign(query, { 'attackMin': Number.parseInt(this.attackMin) });
      }
      // 確保力（最大）
      if (this.attackMax) {
        Object.assign(query, { 'attackMax': Number.parseInt(this.attackMax) });
      }
      // 確保力無限大または無し
      Object.assign(query, { 'attackSpecial': this.attackSpecial });
      // コスト（最小）
      if (this.costMin) {
        Object.assign(query, { 'costMin': Number.parseInt(this.costMin) });
      }
      // コスト（最大）
      if (this.costMax) {
        Object.assign(query, { 'costMax': Number.parseInt(this.costMax) });
      }
      // コスト無限大または無し
      Object.assign(query, { 'costSpecial': this.costSpecial });
      // タグ（スペース区切り）
      const tags = this.tags.replace('　', ' ').split(' ').filter(tag => tag);
      if (tags.length != 0) {
        Object.assign(query, { 'tags': tags });
      }
    }
    // 表示項目（選ばれたもののみを表示対象とする。※注意：textではなくkeyを送る）
    Object.assign(query, { 'projections': this.selectedProjections.map(projection => projection.key) });
    // 表示件数
    Object.assign(query, { 'pageSize': this.selectedPagerOption } );
    // ソート
    Object.assign(query, { 'sort': 'name_asc' });
    // 現在のページ（0オリジン）
    Object.assign(query, { 'page': 0 });

    // ページャ向けにクエリを保持する
    this.currentQuery = query;

    // ここまで
    const body = JSON.stringify(query);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/search_cards", { method: 'POST', body: body, headers: headers, mode: 'cors' })
    .then(response => response.json())
    .then(json => { this.cards = json.cards; this.count = json.count; this.reRender++; })
    .catch(reason => this.message = JSON.stringify(reason));
  }



  cards: Card[] = [];

  // デバッグ用
  public message: string = '接続されていません';
  /*
  constructor() {
    fetch('https://localhost/connectivity', { mode: 'cors' })
      .then(response => response.json())
      .then(() => this.message = '接続されています')
      .catch(reason => this.message = JSON.stringify(reason))
  }*/

  @computedFrom('selectedMaintypes')
  get isShowingObjectColumn() {
    return this.selectedMaintypes.some(maintype => maintype.text == "オブジェクト");
  }

  // @computedFrom('selectedProjections')
  @computedFrom('currentQuery')
  get isShowingMaintypes() {
    // return this.selectedProjections.some(projection => projection.key == 1)
    return this.currentQuery?.projections?.some((projection: number) => projection == 1);
  }
  // @computedFrom('selectedProjections')
  @computedFrom('currentQuery')
  get isShowingSubtypes() {
    // return this.selectedProjections.some(projection => projection.key == 2)
    return this.currentQuery?.projections?.some((projection: number) => projection == 2);
  }
  // @computedFrom('selectedProjections')
  @computedFrom('currentQuery')
  get isShowingOc() {
    // return this.selectedProjections.some(projection => projection.key == 3)
    return this.currentQuery?.projections?.some((projection: number) => projection == 3);
  }
  // @computedFrom('selectedProjections')
  @computedFrom('currentQuery')
  get isShowingAttack() {
    // return this.selectedProjections.some(projection => projection.key == 4)
    return this.currentQuery?.projections?.some((projection: number) => projection == 4);
  }
  // @computedFrom('selectedProjections')
  @computedFrom('currentQuery')
  get isShowingCost() {
    // return this.selectedProjections.some(projection => projection.key == 5)
    return this.currentQuery?.projections?.some((projection: number) => projection == 5);
  }
  // @computedFrom('selectedProjections')
  @computedFrom('currentQuery')
  get isShowingEffect() {
    // return this.selectedProjections.some(projection => projection.key == 6)
    return this.currentQuery?.projections?.some((projection: number) => projection == 6);
  }
  // @computedFrom('selectedProjections')
  @computedFrom('currentQuery')
  get isShowingTags() {
    // return this.selectedProjections.some(projection => projection.key == 7)
    return this.currentQuery?.projections?.some((projection: number) => projection == 7);
  }

  catchEnter(event: any) {
    if(event.which == 13) {
      this.submitSearch();
      event.preventDefault();
      return false;
    }
    return true;
  }

  openFandom(card: Card) {
    if (card.page_title) {
      window.open('https://scptcgjpj.fandom.com/ja/wiki/' + card.page_title, '_blank');
    } else {
      window.open('https://scptcgjpj.fandom.com/ja/wiki/' + card.name, '_blank');
    }
  }
}
