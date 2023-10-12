import app from 'cmf/site/app';
import Component from 'cmf/common/Component';
import username from 'cmf/common/helpers/username';
import formatNumber from 'cmf/common/utils/formatNumber';
import Link from 'cmf/common/components/Link';
import LoadingIndicator from 'cmf/common/components/LoadingIndicator';
import ItemList from 'cmf/common/utils/ItemList';

const translationPrefix = 'widget.site.navbar.';
const attributePrefix = 'widget.';

export default class Widget extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    const lastUserId = app.site.attribute(attributePrefix + 'lastUserId');

    if (lastUserId) {
      this.loading = true;

      app.store.find('users', lastUserId).then((user) => {
        this.user = user;
        this.loading = false;
        m.redraw();
      });
    }
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    const items = this.items().toArray();

    if (items.length === 0) return;

    return (
      <div class="Widget containerNarrow">
        <div class="row">
          <h2>
            <i class="fas fa-chart-bar"></i> {app.translator.trans(translationPrefix + 'widget_title')}
          </h2>
          <div>
            <ul id="WidgetList">{items}</ul>
          </div>
        </div>
      </div>
    );
  }

  items() {
    const items = new ItemList();

    let discussionsCount = app.site.attribute(attributePrefix + 'discussionsCount');
    let postsCount = app.site.attribute(attributePrefix + 'postsCount');
    let usersCount = app.site.attribute(attributePrefix + 'usersCount');
    const lastUserId = app.site.attribute(attributePrefix + 'lastUserId');

    if (discussionsCount) {
      items.add(
        'discussions_count',
        <li>
          {app.translator.trans(translationPrefix + 'discussions_count', {
            discussionsCount: formatNumber(discussionsCount),
          })}
        </li>
      );
    }

    if (postsCount) {
      items.add(
        'posts_count',
        <li>
          {app.translator.trans(translationPrefix + 'posts_count', {
            postsCount: formatNumber(postsCount),
          })}
        </li>
      );
    }

    if (usersCount) {
      items.add(
        'users_count',
        <li>
          {app.translator.trans(translationPrefix + 'users_count', {
            usersCount: formatNumber(usersCount),
          })}
        </li>
      );
    }

    if (lastUserId) {
      items.add(
        'latest_member',
        <li>
          <Link href={app.route.user(this.user)}>
            {username(this.user)}
          </Link>
          {app.translator.trans(translationPrefix + 'latest_member')}{' '}
        </li>
      );
    }

    return items;
  }
}
