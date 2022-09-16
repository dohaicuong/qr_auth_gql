import { styled } from '@mui/material'
import clsx from 'clsx'

export type CircularButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  color?: 'default' | 'primary' | 'secondary' | 'error'
  image?: string | JSX.Element
  icon?: React.ReactNode
  selected?: boolean
  screw?: 'left' | 'right'
}

export const CircularButton: React.FC<CircularButtonProps> = styled
  (({
    image, icon,
    className,
    color = 'default',
    selected,
    style,
    screw,
    ...props
  }: CircularButtonProps) => {
    return (
      <button
        {...props}
        className={clsx(className, {
          'CircularButton-default-color': color === 'default',
          'CircularButton-primary-color': color === 'primary',
          'CircularButton-secondary-color': color === 'secondary',
          'CircularButton-error-color': color === 'error',

          'CircularButton-image': Boolean(image),

          'CircularButton-selected': selected,

          'CircularButton-screw-right': screw === 'right',
        })}
        style={{
          ...style,
          ...(image ? { backgroundImage: `url(${image})` } : {})
        }}
      >
        {!image && icon}
      </button>
    )
  })
  (({ theme }) => {
    const isStyleOne = Math.random() < 0.5

    const baseStyles = `
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      width: 48px;
      cursor: pointer;
      transition: all 300ms ease-in-out;
      border: none;
      border-radius: 100%;
      &:hover, &:focus, &.CircularButton-selected {
        border-radius: 0.5rem 1.2rem 0.5rem 1.2rem;
      }

      &.CircularButton-screw-right {
        &:hover, &:focus, &.CircularButton-selected {
          border-radius: 1.2rem 0.5rem 1.2rem 0.5rem;
        }
      }
    `

    const imageButtonStyles = `
      &.CircularButton-image {
        background-size: cover;
        background-position: center;
      }
    `

    const defaultBackgroundColor = '#36393f'
    const defaultBackgroundColorHover = '#4f545c'
    const defaultTextColor = theme.palette.text.primary
    const defaultColorStyles = `
      &.CircularButton-default-color {
        background-color: ${defaultBackgroundColor};
        color: ${defaultTextColor};
        &:hover, &:focus, &.CircularButton-selected {
          background-color: ${defaultBackgroundColorHover};
          color: ${defaultTextColor};
        }
      }
    `

    const primaryBackgroundColor = '#36393f'
    const primaryTextColor = theme.palette.primary.main
    const primaryTextColorHover = theme.palette.primary.contrastText
    const primaryColorStyles = `
      &.CircularButton-primary-color {
        background-color: ${primaryBackgroundColor};
        color: ${primaryTextColor};
        &:hover, &:focus, &.CircularButton-selected {
          background-color: ${primaryTextColor};
          color: ${primaryTextColorHover};
        }
      }
    `

    const secondaryBackgroundColor = '#36393f'
    const secondaryTextColor = theme.palette.secondary.main
    const secondaryTextColorHover = theme.palette.secondary.contrastText
    const secondaryColorStyles = `
      &.CircularButton-secondary-color {
        background-color: ${secondaryBackgroundColor};
        color: ${secondaryTextColor};
        &:hover, &:focus, &.CircularButton-selected {
          background-color: ${secondaryTextColor};
          color: ${secondaryTextColorHover};
        }
      }
    `
    
    const errorBackgroundColor = '#36393f'
    const errorTextColor = theme.palette.error.main
    const errorTextColorHover = theme.palette.error.contrastText
    const errorColorStyles = `
      &.CircularButton-error-color {
        background-color: ${errorBackgroundColor};
        color: ${errorTextColor};
        &:hover, &:focus, &.CircularButton-selected {
          background-color: ${errorTextColor};
          color: ${errorTextColorHover};
        }
      }
    `

    return `
      ${baseStyles}
      
      ${imageButtonStyles}
      
      ${defaultColorStyles}      
      ${primaryColorStyles}
      ${secondaryColorStyles}
      ${errorColorStyles}
    `
  })
  