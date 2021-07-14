import {BrowserWindow} from "electron";
import {HttpsProxyAgentOptions} from 'https-proxy-agent'

declare namespace Pushy {

    type DeviceToken = string

    type Listener<T> = (data: T) => void

    function setProxy(proxy: HttpsProxyAgentOptions): void

    function listen(): void

    function setNotificationListener<T>(l: Listener<T>): void

    function register(opts: { appId: string }): Promise<DeviceToken>

    function isRegistered(): boolean

    function subscribe(topics: string | string[]): Promise<void>

    function unsubscribe(topics: string | string[]): Promise<void>

    function validateDeviceCredentials(): Promise<void>

    function setHeartbeatInterval(seconds: number): void

    function isEnterpriseConfigured(): boolean

    function setEnterpriseConfig(endpoint: string, mqttEndpoint: string): void

    function disconnect(): void

    function alert(win: BrowserWindow, msg: string): void
}

export = Pushy
export as namespace Pushy
