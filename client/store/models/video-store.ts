import { observable, action, toJS } from 'mobx'

import { get } from '@/utils/http'

import {
  IVideoStore,
  VideoList,
  Video,
  VideoListItem,
  QueryParams
} from '../types'

export default class VideoStore implements IVideoStore{
  'constructor'({ video }: { video: Video}  = {video: {
    list: [] as VideoList,
    playing: {} as VideoListItem,
  }}) {
    this.video = video
  }

  @observable video: Video

  @action getVideo() {
    return new Promise((resolve, reject) => {
      get('/video/info', {}).then((resp) => {
        this.video.list = resp as VideoList
        resolve()
      }).catch(reject)
    })
  }

  @action getVideoDetail(params: QueryParams) {
    return new Promise((resolve, reject) => {
      get('/video/info', params).then((resp) => {
        this.video.playing = resp as VideoListItem
        resolve()
      }).catch(reject)
    })
  }

  @action setVideoPlaying(video: VideoListItem) {
    this.video.playing = video
  }

  toJson() {
    return {
      video: toJS(this.video)
    }
  }
}
