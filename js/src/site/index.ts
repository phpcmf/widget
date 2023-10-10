import app from 'cmf/site/app';
import { extend } from 'cmf/common/extend';
import IndexPage from 'cmf/site/components/IndexPage';
import Widget from './components/Widget';
import ItemList from 'cmf/common/utils/ItemList';

app.initializers.add('cmf/widget', () => {
  extend(IndexPage.prototype, 'sidebarItems', function (items: ItemList) {
    items.add('Widget', Widget.component(), app.site.attribute('widget.widget_order'));
  });
});
