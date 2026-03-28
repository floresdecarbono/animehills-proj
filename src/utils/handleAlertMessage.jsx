import { bus } from "./event";

export function handleAlertMessage(mensagem, tipo) {
    bus.emit('message', {
        mensagem,
        tipo
    })
}