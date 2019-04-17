const EventEmitter = () => {
  const _listeners = {};

  return {
    on: (event, listener) => {
      if (!_listeners[event]) {
        _listeners[event] = [];
      }

      _listeners[event].push(listener);
    },

    emit: (event, arg) => {
      if (!_listeners[event]) {
        return;
      }
      _listeners[event].map(listener => listener(arg));
    },
  };
};

const randomNumbers = EventEmitter();

randomNumbers.on('number', number => {
  console.log('Event has been fired ' + number);
});

randomNumbers.emit('number', Math.round(Math.random() * 10));
