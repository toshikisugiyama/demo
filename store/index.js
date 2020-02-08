import drinkImg from '@/assets/images/wine-890370_640.svg'
import pastaImg from '@/assets/images/pasta-2571391_640.svg'
import riceImg from '@/assets/images/paella-2246527_640.svg'
import dessertImg from '@/assets/images/cheesecake-3761196_640.svg'
export const state = () => ({
  news: [
    {
      id: '1',
      title: '○○入荷しました！',
      contents: '○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！○○入荷しました！',
      date: '2020年 2月 1日'
    },
    {
      id: '2',
      title: '明けましておめでとうございます',
      contents: '明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます明けましておめでとうございます',
      date: '2020年 1月 1日'
    },
    {
      id: '3',
      title: '年末年始の営業日のお知らせ',
      contents: '年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ年末年始の営業日のお知らせ',
      date: '2019年 12月 1日'
    }
  ],
  pages: [
    {
      name: 'top',
      path: '/'
    },
    {
      name: 'concept',
      path: '/concept'
    },
    {
      name: 'menu',
      path: '/menu'
    },
    {
      name: 'news',
      path: '/news'
    },
    {
      name: 'access',
      path: '/access'
    }
  ],
  menus: [
    {
      id: 1,
      name: 'drink',
      src: drinkImg,
      path: '/menu/drink'
    },
    {
      id: 2,
      name: 'pasta',
      src: pastaImg,
      path: '/menu/pasta'
    },
    {
      id: 3,
      name: 'rice',
      src: riceImg,
      path: '/menu/rice'
    },
    {
      id: 4,
      name: 'dessert',
      src: dessertImg,
      path: '/menu/dessert'
    }
  ],
  drinks: [
    {
      id: 1,
      name: '生ビール',
      price: '280'
    },
    {
      id: 2,
      name: 'ハイボール',
      price: '360'
    }
  ],
  pastas: [
    {
      id: 1,
      name: 'キノコのクリームパスタ',
      price: '1000'
    },
    {
      id: 2,
      name: 'ナポリタンパスタ',
      price: '1360'
    }
  ],
  rices: [
    {
      id: 1,
      name: 'イカ墨のパエリア',
      price: '2000'
    },
    {
      id: 2,
      name: 'チーズリゾット',
      price: '1260'
    }
  ],
  desserts: [
    {
      id: 1,
      name: 'バニラアイス',
      price: '400'
    },
    {
      id: 2,
      name: 'レアチーズケーキ',
      price: '500'
    }
  ],
  storeInfo: {
    logo: 'logo',
    conceptColor: '#EC5016',
    openingTime: '17:00~25:00',
    closedDay: '月曜日',
    postNum: '〇〇〇-〇〇〇〇',
    address: '〇〇県〇〇市〇〇 〇丁目〇番地〇',
    telNum: '〇〇〇-〇〇〇〇-〇〇〇〇',
    email: '〇〇〇〇@email.com'
  }
})

export const getters = {
  getNews: state => state.news,
  getPages: state => state.pages,
  getMenus: state => state.menus,
  getDrinks: state => state.drinks,
  getPastas: state => state.pastas,
  getRices: state => state.rices,
  getDesserts: state => state.desserts,
  getStoreInfo: state => state.storeInfo
}

export const mutations = {
  addDrinks (state, data) {
    state.drinks.push(data.drink)
  },
  addPastas (state, data) {
    state.pastas.push(data.pasta)
  },
  addRices (state, data) {
    state.rices.push(data.rice)
  },
  addDesserts (state, data) {
    state.desserts.push(data.dessert)
  }
}
