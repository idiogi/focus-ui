# Button

Buttons are used to make common actions immediately visible and easy to perform in one click, tap, or keypress. Users can use them to
navigate or to take action.

---

## Best practices

Buttons should:

- Be clearly and accurately labeled.
- Lead with strong, actionable verbs.
- Use established button colors appropriately. For example, only use a red button for an action that's difficult or impossible to undo.
- Prioritize the most important actions. Too many calls to action can cause confusion and make users unsure of what to do next.
- Be positioned in consistent locations on the interface.

---

## Examples

---

## Accessibility

Buttons can have different states that are visually and programmatically conveyed to users.

- Use the `ariaControls` prop to add an `aria-controls` attribute to the button. Use this attribute to point ot the unique `id` of the
  content that the button manages.
- If a button expands or collapses adjacent content, then use the `ariaExpanded` prop to add the `aria-expanded` attribute to the button.
  Set the value to convey the current expanded (`true`) or collapsed (`false`) state of the content.
- Use the `disabled` prop to set the `disabled` state of the button. This prevents users from being able to interact with the button, and
  conveys its inactive state to assistive technologies.
- Use the `ariaPressed` prop to add an `aria-pressed` attribute to the button.

### Navigation

Users generally expect buttons to submit data or take action, and for links to navigate. If navigation is required for the button component,
use the `url` prop. The control will output an anchor styled as a button, instead of a button in HTML, to help convey this difference.

### Labeling

The `accessibilityLabel` prop adds an `aria-label attribute to the button, which can be accessed by assistive technologies like screen
readers. Typically, this label text replaces the visible text on the button for users who use assistive technologies.

Use `accessibilityLabel` for a button if:

- The button's visible text does not adequately convey the purpose of the button to non-visual users.
- The button has no text and relies on an icon alone to convey its purpose.

To help support users who use speech activation software as well as sighted screen reader users, make sure that the `aria-label` text
includes any button text that's visible. Mismatches between visible and programmatic labeling can cause confusion, and might prevent voice
recognition commands from working.

When possible, given the button visible text that clearly conveys its purpose without the user of `accessibilityLabel`. When no additional
content is needed, duplicating the button text with `accessibilityLabel` is not nessesary.
