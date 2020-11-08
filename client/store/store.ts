import React from 'react'
import CounterStore from './models/counter-store'
import ThemeStore from './models/theme-store'
import AppStore from './models/app-store'
import VideoStore from './models/video-store'

export {
  CounterStore,
  ThemeStore,
  AppStore,
  VideoStore,
}

export const stores = {
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
  appStore: new AppStore(),
  videoStore: new VideoStore(),
}

export const storesContext = React.createContext(stores)

export const createStoreMap = () => ({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
  appStore: new AppStore(),
  videoStore: new VideoStore(),
})
