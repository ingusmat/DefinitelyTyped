// Generated with https://github.com/erikburt/javascript-time-ago-type-gen

import { Duration, QuantifyType } from "..";

declare const locale: Locale;

interface Locale {
    locale: "zh-Hans-HK";
    long: Duration;
    quantify: (n: number) => keyof QuantifyType;
}

export = locale;
