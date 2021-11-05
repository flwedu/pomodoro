export const EventEmitter = {

    events: new Map<string, Function[]>(),

    listen: (topic: string, callback: Function) => {

        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [...oldEvents, callback])
        }
    },

    emit: (topic: string, data: any) => {
        const listeners = EventEmitter.events.get(topic)
        if (listeners && listeners.length) {
            listeners.forEach(event => event(data))

        }
    }
}