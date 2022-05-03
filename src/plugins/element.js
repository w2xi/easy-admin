import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Tabs,
  TabPane,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Avatar,
  Message,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Table,
  TableColumn,
  Tag,
  Pagination,
  MessageBox,
  Dialog,
  TimePicker,
  DatePicker,
  ColorPicker,
  Popover,
  Select,
  Option,
  Radio,
  RadioGroup,
  Alert,
  Upload,
  Descriptions,
  DescriptionsItem,
  Switch,
  Loading,
  InputNumber,
  Tree,
  Timeline,
  TimelineItem,
  Tooltip,
  Checkbox,
  CheckboxGroup,
  Breadcrumb,
  BreadcrumbItem,
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(TimePicker)
Vue.use(DatePicker)
Vue.use(ColorPicker)
Vue.use(Popover)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Alert)
Vue.use(Upload)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Switch)
Vue.use(InputNumber)
Vue.use(Tree)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Tooltip)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm