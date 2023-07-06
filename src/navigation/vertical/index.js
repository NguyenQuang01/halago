// ** Icon imports
// import Login from 'mdi-material-ui/Login'
// import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

// import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
// import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import WifiIcon from '@mui/icons-material/Wifi'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import WebIcon from '@mui/icons-material/Web'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'

const navigation = () => {
  return [
    {
      title: 'Nhãn hàng',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Influencer',
      icon: WifiIcon,
      path: '/account-settings'
    },

    {
      title: 'Chiến dịch',
      icon: InsertChartIcon,
      path: '/pages/login'

      // openInNewTab: true
    },
    {
      title: 'Tin tức',
      icon: TextSnippetIcon,
      path: '/pages/register'

      // openInNewTab: true
    },
    {
      title: 'Hiển thị trên Web',
      icon: WebIcon,
      path: '/pages/error'

      // openInNewTab: true
    },

    {
      title: 'Khách hàng liên hệ',
      icon: AddIcCallIcon,
      path: '/typography'
    },
    {
      title: 'Phân quyền',
      path: '/icons',
      icon: AllInclusiveIcon
    }

    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
