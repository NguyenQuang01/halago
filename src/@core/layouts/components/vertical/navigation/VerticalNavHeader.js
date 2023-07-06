// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

import themeConfig from 'src/configs/themeConfig'
import logo from '../../../../../../public/images/logoHalago.png'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <img
              src='data:image/png;base64,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'
              alt=''
            />

            {/* <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle> */}
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
