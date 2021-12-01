# Text field

A text field is an input field that users can type into. It has a range of options and supports several text formats including numbers.

---

## Best practices

Text fields should:

- Be clearly labeled so it's obvious to users what they should enter into the field.
- Be labeled as "Optional" when you need to request input that's not required.
- Only ask for information that's really needed.
- Validate input as soon as users have finished interacting with a field (but not before).

---

## Content guidelines

### Field label

A label is a short description of the requested input. Labels are not instructional text but they should be meaningful and clearly indicate
what is expected. Labels should be:

- Placed above or beside the form field
- Short and succinct (1-3 words)
- Written in sentence case (the first word capitalized, the rest lowercase)

#### Do

- Email address
- Phone number

### Don't

- What is your email address?
- My phone number is:

### Field placeholder text

Placeholder text is shown inside the form field to teach users what to input. Field placeholder text should:

- Be used only for supplementary information because the text has low contrast and is not visible when text is entered
- Be written as examples instead of instructions
- Include "Example:" before an example

### Designating optional fields

Try to only ask for information that's required. If you need to ask users to provide optional information, mark the field optional by
placing the text "(optional)" at the end of the fields' label. Don't mark required fields with asterisks.

#### Do

Phone number (optional)

#### Don't

First name\*

### Help text

Help text provides guidance or instructions to people filling out a form field. It can also be used to clarify how the information will be
used. As with all form content, help text should be succinct and easy to read.

#### Do

9-digit number

#### Don't

Example: 123-456-789

### Validation error messages

Error messages should:

- Clearly explain what went wrong and how to fix it
- Be short and concise, no more than a single sentence
- Use passive voice, so users don't field like they're being blamed for the error

#### Do

Application name is required

#### Don't

You didn't enter the application name

## Accessibility

### Structure

Screen readers convey information about text fields automatically through native HTML.

- Use the `disabled` prop to add the HTML `disabled` attribute to the text field.
- Use the `readOnly` prop to add the HTML `readonly` attribute to the text field.
- If you use the `type` prop, then some assistive technologies adapt the software keyboard to the current task. This helps users with
  mobility, vision, and cognitive issues to enter information more easily.

Use the `id` prop to provide a unique `id` attribute value for the text field. if you don't provide an `id`, then the component generates
one automatically. All text fields need to have unique `id` values.

### Labeling

The `label` prop is required to convey the purpose of the text field to all users.

If there are separate visual cues that convey the purpose of the text field to sighted users, then the label can be visually hidden with
the `labelHidden` prop.

When you provide help text fia the `helpText` prop or an inline error message via the `error` prop, the help or error content is conveyed to
screen reader users with the `aria-describedby` attribute. This attribute causes the content to be read along with the label, either
immediately or after a short delay.

Use the `placeholder` prop to provide additional instructions. However, don't rely on placeholders alone since the content isn't always
conveyed to all users.

#### Do

- Use the label to provide instructions critical to using the text field
- Use help text and placeholder text to provide additional, non-critical instructions

#### Don't

- Use the placeholder to provide information that's required to use the text field\

### Keyboard support

Text fields have standard keyboard support.

- users who rely on the keyboard expect to move focus to each text field using the <kbd>tab</kbd> key or (<kdb>shift</kdb> + <kbd>tab</kbd>
  when tabbing backwards)
- If the `type` is set to `number`, then users can use the up and down arrow keys to adjust the value typed into the field
- Using the `disabled` prop will prevent the text field from receiving keyboard focus or inputs.
- The `readOnly` prop allows focus on the text field but prevents input or editing
- The `inputMode` prop can be used to bring up a relevant keyboard for users on mobile; it's passed down to the input as
  an [`inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)

#### Automatically focusing

Although you can use the `autoFocus` prop to automatically move focus to the text field, it's generally best to avoid focusing on fields
automatically. The `autoFocus` prop is set the `false` by default and should only be used in cases where it won't force focus to skip other
controls or content of equal or greater importance.

### Autocomplete

- Use the `ariaControls` and `ariaOwns` props (which implement the `aria-controls` and `aria-owns` attributes) to point to the `id` of the
  autocomplete list.
- Use the `ariaAutocomplete` prop to indicate what kind of `aria-autocomplete` input is provided, either `list` or `inline`.
  Typically, `list` is used.
- When users navigate through the list, the `ariaActiveDescendant` prop indicates which option has programmatic focus so that it can be
  conveyed to screen reader users.
