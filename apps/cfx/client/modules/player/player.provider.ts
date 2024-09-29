import {Provider} from '@core/decorations/provider'
import {Remote} from '@core/decorations/remote'
import {ServerRemote} from '@shared/types/remote-builder'
import {PlayerProviderServerRemote} from '@server/modules/types/player'
import {Tick} from '@core/decorations/tick'
import {OnEvent} from '@core/decorations/event'
import {OnSharedEventName} from '@shared/types/events'
import {Ped} from '@client/lib/ped'
import {Container} from '@core/container'
import {Inject} from '@core/decorations/injectable'
import {Logger} from '@core/logger'
import {Tunnel} from '@core/decorations/tunnel'
import {PlayerProviderClientRemote} from '@client/modules/types/player'

@Provider()
export class PlayerProvider implements PlayerProviderClientRemote {
  @Remote()
  private readonly remote: ServerRemote<PlayerProviderServerRemote>

  @Inject(Logger)
  private readonly logger: Logger

  private _ped: Ped

  public get ped(): Ped {
    return this._ped
  }

  public set ped(ped: Ped) {
    this._ped = ped
  }

  @Tunnel()
  public getHealth(): number {
    return this.ped.health
  }

  @Tunnel()
  public setHealth(health: number) {
    this.ped.health = health
  }

  @Tunnel()
  public getCoords(): Vector3 {
    return this.ped.coords
  }

  @Tunnel()
  public setCoords(coords: Vector3) {
    this.ped.coords = coords
  }

  @Tunnel()
  public getHeading(): number {
    return this.ped.health
  }

  @Tunnel()
  public setHeading(heading: number) {
    this.ped.heading = heading
  }

  @Tunnel()
  public getArmour(): number {
    return this.ped.armour
  }

  @Tunnel()
  public setArmour(armour: number) {
    this.ped.armour = armour
  }

  @Tunnel()
  public getCustomization(): Todo {
    return this.ped.getCustomization()
  }

  @Tunnel()
  public setCustomization(customization: Customization) {
    return this.ped.setCustomization(customization)
  }

  @OnEvent({eventName: OnSharedEventName.onApplicationStart})
  private onStart() {
    this.ped = Container.get(Ped)

    this.ped.id = PlayerPedId()

    // RegisterCommand('test1', async () => {
    //   SetFrontendActive(true)
    //   ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_EMPTY_NO_BACKGROUND'), false, -1)
    //   await Delay(100)
    //   SetMouseCursorVisibleInMenus(false)
    //   const PlayerPedPreview = ClonePed(this.ped.id, false, true, false)
    //   const [x, y, z] = GetEntityCoords(PlayerPedPreview, false)
    //   SetEntityCoords(PlayerPedPreview, x, y, z - 10, false, false, false, false)
    //   FreezeEntityPosition(PlayerPedPreview, true)
    //   SetEntityVisible(PlayerPedPreview, false, false)
    //   NetworkSetEntityInvisibleToNetwork(PlayerPedPreview, false)
    //   await Delay(200)
    //   SetPedAsNoLongerNeeded(PlayerPedPreview)
    //   GivePedToPauseMenu(PlayerPedPreview, 1)
    //   SetPauseMenuPedLighting(true)
    //   SetPauseMenuPedSleepState(true)
    //   ReplaceHudColourWithRgba(117, 0, 0, 0, 0)
    // }, false)
  }

  @Tick(10000)
  private async updatePlayerTick() {
    const [positionX, positionY, positionZ] = this.ped.coords
    await this.remote.update({
      status: {
        armour: this.ped.armour,
        heading: this.ped.heading,
        health: this.ped.health,
        positionX,
        positionY,
        positionZ
      },
      customization: this.ped.getCustomization()
    })

    this.logger.debug('update player data')
  }
}