#!/usr/bin/env node

module.exports = () => {
    return `@import 'themes.scss';

@mixin themify($themes: $themes) {
    @each $theme,
    $map in $themes {
        .theme-#{$theme} & {
            $theme-map: () !global;
            @each $key,
            $submap in $map {
                $value: map-get(map-get($themes, $theme), '#{$key}');
                $theme-map: map-merge($theme-map, ($key: $value)) !global;
            }
            @content;
            $theme-map: null !global;
        }
    }
}

@function themed($key) {
    @return map-get($theme-map, $key);
}`;
};