<script lang="ts">

import { computed, defineComponent, h, PropType, VNode } from 'vue';
import StackItem from './StackItem.vue';

export enum Spacing {
  ExtraTight = 'extra-tight',
  Tight = 'tight',
  BaseTight = 'base-tight',
  Loose = 'loose',
  ExtraLoose = 'extra-loose',
  None = 'none',
}

export enum Alignment {
  Leading = 'leading',
  Trailing = 'trailing',
  Center = 'center',
  Fill = 'fill',
  BaseLine = 'baseline',
}

export enum Distribution {
  EqualSpacing = 'equal-spacing',
  Leading = 'leading',
  Trailing = 'trailing',
  Center = 'center',
  Fill = 'fill',
  FillEvenly = 'fill-evenly',
}

/**
Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible
items that wrap each of the stack's children. Options provide control of the wrapping, spacing, and relative size
of the items in the stack.

---

## Best practices

Stacks should:

- Be used for small-scale layout tasks when you want a row of components that should wrap on small screen widths
- Be used to vertically center two elements
- Not be used for complex unique arrangement of components
- Not be used for large-scale page layout

---

## Examples

### Default behaviour

Use to quickly lay out a horizontal row of components and maintain their relative sizes. On small screens, children
rows wrap down to additional rows as needed.

```vue
<Stack>
<Badge>Published</Badge>
<Badge>Staged</Badge>
<Badge>Not completed</Badge>
</Stack>
```

### Non-wrapping stacks

Use to create a stack where the children will not wrap to new rows on small screens. As noted above, the wrap option
defaults to true. This means you must explicitly set it to false to turn it off.

```vue
<Stack :wrap="false">
<Badge>Published</Badge>
<Badge>Staged</Badge>
<Badge>Not completed</Badge>
</Stack>
```

### Spacing options

Use to control spacing of items in a stack in standard increments. Use tight for less spacing, loose for more spacing
or none to remove normal spacing altogether.

```vue
<Stack spacing="loose">
<Badge>Published</Badge>
<Badge>Staged</Badge>
<Badge>Not completed</Badge>
</Stack>
```

### Vertical centering with a stack

Use to vertically center a set of items that have different heights.

```vue
<Stack spacing="loose">
<Heading>Page was published</Heading>
<Badge>Published</Badge>
<Badge>Staged</Badge>
<Badge>Not completed</Badge>
</Stack>
```

### Fill available space proportionally

Use to have the stack's items fill the horizontal space in the container but maintain their relative proportions.

```vue
<Stack distribution="fill">
<Badge>Published</Badge>
<Badge>Staged</Badge>
<Badge>Not completed</Badge>
</Stack>
```

### Stack where items fill space evenly

Use to have the stack's items fill the horizontal space in the container and be equal widths, regardless of their content.

```vue
<Stack distribution="fillEvenly">
<Badge>Published</Badge>
<Badge>Staged</Badge>
<Badge>Not completed</Badge>
</Stack>
```
 */
export default defineComponent({
  components: { StackItem },

  props: {
    /** Wrap stack elements to additional rows as needed on small screens (Defaults to true) */
    wrap: {
      type: Boolean,
      default: true,
    },

    /** Stack the elements vertically */
    vertical: {
      type: Boolean,
      default: false,
    },

    /** Adjust spacing between elements */
    spacing: {
      type: String as PropType<Spacing>,
      default: Spacing.BaseTight,
      validator: (value: string): boolean => Object.values(Spacing).includes(value as Spacing),
    },

    /** Adjust vertical alignment of elements. */
    alignment: {
      type: String as PropType<Alignment>,
      default: Alignment.Center,
      validator: (value: string): boolean => Object.values(Alignment).includes(value as Alignment),
    },

    /** Adjust horizontal alignment of elements. */
    distribution: {
      type: String as PropType<Distribution>,
      default: Distribution.Leading,
      validator: (value: string): boolean => Object.values(Distribution).includes(value as Distribution),
    },
  },

  setup(props, { slots }) {
    const classes = computed(() => [
      'stack',
      { [`stack--spacing-${props.spacing}`]: props.spacing },
      { [`stack--distribution-${props.distribution}`]: props.distribution },
      { [`stack--alignment-${props.alignment}`]: props.alignment },
      { 'stack--vertical': props.vertical },
      { 'stack--wrap': props.wrap },
    ]);

    const children = slots.default().map((element: VNode) => {
      return element.type.name === StackItem.name
        ? element
        : h(StackItem, {}, () => element);
    });

    return () => h('div', { class: classes.value }, children);
  },
});

</script>

<style lang="scss">
@import "./Stack";
</style>
