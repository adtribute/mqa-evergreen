import React from 'react'
import Box from 'ui-box'
import {
  Text,
  Paragraph,
  Heading,
  Link,
  Code,
  Pre,
  Label,
  Small,
  Strong,
  UnorderedList,
  OrderedList,
  ListItem
} from '..'
import { TickCircleIcon, BanCircleIcon, TickIcon } from '../../icons'

const TextSizes = [300, 400, 500]
const HeadingSizes = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const dummyText = 'A red flair silhouetted the jagged edge of a wing.'

function previewTextComponent(Comp, sizes = TextSizes, props = {}) {
  return (
    <Box>
      {sizes.map(size => (
        <Box key={size}>
          <Comp size={size} {...props}>
            {size}: {dummyText}
          </Comp>
        </Box>
      ))}
    </Box>
  )
}

export default {
  title: 'typography'
}

export const _Text = () => <div>{previewTextComponent(Text)}</div>

export const _Link = () => (
  <Box padding={40}>
    <Box marginBottom={24}>
      <Text>
        In order to learn more about this feature, visit <Link href="#">the developer center</Link>.{' '}
      </Text>
    </Box>
    <Box marginBottom={24}>
      <Link href="#" color="neutral">
        Neutral Link
      </Link>
    </Box>
  </Box>
)

export const _Paragraph = () => <div>{previewTextComponent(Paragraph, TextSizes, { marginTop: 24 })}</div>
export const _Heading = () => <div>{previewTextComponent(Heading, HeadingSizes, { marginTop: 24 })}</div>

export const _Code = () => (
  <div>
    {previewTextComponent(Code)}
    {previewTextComponent(Code, TextSizes, { appearance: 'minimal' })}
  </div>
)

export const _Pre = () => <div>{previewTextComponent(Pre)}</div>
export const _Label = () => <div>{previewTextComponent(Label)}</div>

export const _Small = () => (
  <div>
    <Paragraph>
      Small can only be used inside of a paragraph or other text component <Small>like this</Small>
    </Paragraph>
  </div>
)

export const _Strong = () => <div>{previewTextComponent(Strong)}</div>

export const _UnorderedList = {
  render: () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop={24}>
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop={24}>
            A paragraph before a list. You have to manually set the margins on a list.
          </Paragraph>
          <OrderedList size={size} marginY={16}>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
          </OrderedList>
          <Paragraph size={size} marginTop={24}>
            A paragraph after a list.
          </Paragraph>
        </Box>
      ))}
    </Box>
  ),

  name: 'UnorderedList'
}

export const UnorderedListWithIcons = {
  render: () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop={24}>
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop={24}>
            You can add icons to list items individually.
          </Paragraph>
          <UnorderedList size={size} marginY={16}>
            <ListItem icon={TickCircleIcon} iconColor="success">
              Lorem ipsum dolar set amet
            </ListItem>
            <ListItem icon={TickCircleIcon} iconColor="success">
              Lorem ipsum dolar set amet
            </ListItem>
            <ListItem icon={BanCircleIcon} iconColor="danger">
              Lorem ipsum dolar set amet
            </ListItem>
            <ListItem icon={BanCircleIcon} iconColor="danger">
              Lorem ipsum dolar set amet
            </ListItem>
          </UnorderedList>
          <Paragraph size={size}>Or you can set the icon on the list.</Paragraph>
          <UnorderedList size={size} marginY={16} icon={TickIcon} iconColor="success">
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
          </UnorderedList>
        </Box>
      ))}
    </Box>
  ),

  name: 'UnorderedList with icons'
}

export const _OrderedList = {
  render: () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop={24}>
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop={24}>
            A paragraph before a list. You have to manually set the margins on a list.
          </Paragraph>
          <UnorderedList size={size} marginY={16}>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
          </UnorderedList>
          <Paragraph size={size} marginTop={24}>
            A paragraph after a list.
          </Paragraph>
        </Box>
      ))}
    </Box>
  ),

  name: 'OrderedList'
}
