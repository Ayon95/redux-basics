export const THEME_TOGGLE = 'theme/toggle';
type ToggleThemeAction = { type: typeof THEME_TOGGLE };

export function toggleTheme(): ToggleThemeAction {
	return { type: THEME_TOGGLE };
}

export type ThemeAction = ToggleThemeAction;
