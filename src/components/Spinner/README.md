# Spinner

Spinners are used to notify users that their action is being processed. For loading states, spinners should only be used for content that
can't be represented by a skeleton loading component, like for data charts.

---

## Examples

---

## Best practices

The spinner component should:

- Notify users that their request has been received and the action will soon complete.
- Not be used to give feedback for an entire page load.
- Be used in conjunction with skeleton loading to represent non-typographic content. For example, line graphs.

---

## Content guidelines

### Accessibility label

Spinner accessibility label should:

- Accurately explain the state of the requested action. For example, "loading", "submitting", "processing".
- Use as few words to describe the state as possible.
