const smartDevices = {
  light: false,
  fan: false,
  heating: false
};

export function controlSmartHome(command) {
  if (command.includes('включи свет')) {
    smartDevices.light = true;
    return 'Свет включен.';
  } else if (command.includes('выключи свет')) {
    smartDevices.light = false;
    return 'Свет выключен.';
  } else if (command.includes('включи вентилятор')) {
    smartDevices.fan = true;
    return 'Вентилятор включен.';
  } else if (command.includes('выключи вентилятор')) {
    smartDevices.fan = false;
    return 'Вентилятор выключен.';
  } else if (command.includes('включи отопление')) {
    smartDevices.heating = true;
    return 'Отопление включено.';
  } else if (command.includes('выключи отопление')) {
    smartDevices.heating = false;
    return 'Отопление выключено.';
  } else {
    return 'Не могу распознать команду для умного дома.';
  }
}
