/*
 * Action Types and Creators
 * 
 * TODO (cw|5.18.2017) fix all these action creators to use FSA (Flux Standard Actions)
 * (see https://github.com/acdlite/flux-standard-action).
 */


// The CONNECT action is intercepted by socketMiddleware
// Thus, there is no corresponding reducer
export const CONNECT = 'CONNECT'
export function connect(endpoint, token) {
  return { type: CONNECT, endpoint, token }
}

// The DISCONNECT action is intercepted by socketMiddleware
// Thus, there is no corresponding reducer
export const DISCONNECT = 'DISCONNECT'
export function disconnect() {
  return { type: DISCONNECT }
}

// The SEND_MESSAGE action is intercepted by socketMiddleware
// Thus, there is no corresponding reducer
export const SEND_MESSAGE = 'SEND_MESSAGE'
export function sendMessage(message) {
  return { type: SEND_MESSAGE, message }
}

// The CONNECTING action is dispatched by the socketMiddleware
export const CONNECTING = 'CONNECTING'
export function connecting() {
  return { type: CONNECTING }
}

// The CONNECTED action is dispatched by the socketMiddleware
export const CONNECTED = 'CONNECTED'
export function connected() {
  return { type: CONNECTED }
}

// The DISCONNECTED action is dispatched by the socketMiddleware
export const DISCONNECTED = 'DISCONNECTED'
export function disconnected() {
  return { type: DISCONNECTED }
}

// The RECEIVED_MESSAGE action is dispatched by the socketMiddleware
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE'
export function receivedMessage(message) {
  return { type: RECEIVED_MESSAGE, message }
}

// The JOINED_SESSION action is dispatched by the socketMiddleware
export const JOINED_SESSION = 'JOINED_SESSION'
export function joinedSession(session) {
  console.info(`%cSuccessfully Joined Session %c${session.id}`,
              'color:green; font-weight:bold',
              'color:blue; font-weight:bold'
             )
  return { type: JOINED_SESSION, session }
}

// the JOINED_BY_USERS action is dispatched by the socketMiddleware
export const JOINED_BY_PEERS = 'JOINED_BY_PEERS'
export function joinedByPeers(peers) {
  return { type: JOINED_BY_PEERS, peers }
}

export const REGISTERED_MIDI_DEVICES = 'REGISTERED_MIDI_DEVICES'
export const registerMIDIDevices = devices => {
  return { type: REGISTERED_MIDI_DEVICES, payload: devices }
}

