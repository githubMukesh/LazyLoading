import { InjectionToken } from '@angular/core';

export type LAZY_MODULES = {
  widgetSettings: string;
};

export const lazyMap: LAZY_MODULES = {
  widgetSettings: 'src/app/widget-setting/widget-setting.module'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
