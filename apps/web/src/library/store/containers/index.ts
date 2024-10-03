import {makeAutoObservable} from 'mobx'
import type {GridContainers} from '@components/grid/lib/types'
import type {GridCallbackOptions} from '@library/services/components/grid'

export class CContainers {
  private _containers: GridContainers = {}

  constructor() {
    makeAutoObservable(this)
  }

  public getContainers(): GridContainers {
    return this._containers
  }

  public setContainers(containers: GridContainers) {
    this._containers = containers
  }

  public canDrop(options: GridCallbackOptions): boolean {
    return true
  }

  public drop(options: GridCallbackOptions): void {
    console.log('success drop', options)
  }
}
