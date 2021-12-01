export interface Action {
  /** Visually hidden text for screen readers. */
  accessibilityLabel: string;
  /** Content the action displays. */
  content: string;
  /** Forces the url to open in a new tab. */
  external: boolean;
  /** A unique identifier for the action. */
  id?: string;
  /** A destination to link to, rendered in the action. */
  url: string;
}

export interface DisableableAction extends Action {
  /** Whether or not the action is disabled. */
  disabled: boolean;
}

export interface LoadableAction extends Action {
  /** Should a spinner be displayed? */
  loading?: boolean;
}

export interface ComplexAction
  extends Action,
    DisableableAction,
    LoadableAction {}

export interface CallbackAction {
  /** A unique identifier for the action. */
  id?: string;
  /** Content the action displays. */
  content?: string;
  /** Callback when an action takes place */
  onAction(): void;
}

export interface LinkAction {
  /** A unique identifier for the action. */
  id?: string;
  /** Content the action displays. */
  content?: string;
  /** A destination to link to */
  url: string;
}
