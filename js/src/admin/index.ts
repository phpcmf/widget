import app from 'cmf/admin/app';

const translationPrefix = 'widget.admin.';

app.initializers.add('widget', () => {
  app.extensionData
    .for('cmf-widget')
    .registerSetting({
      label: app.translator.trans(translationPrefix + 'settings.widget_ignore_private_discussions_label'),
      setting: 'widget.ignore_private_discussions',
      type: 'switch',
    })
    .registerSetting({
      label: app.translator.trans(translationPrefix + 'settings.widget_order_label'),
      setting: 'widget.widget_order',
      type: 'number',
      help: app.translator.trans(translationPrefix + 'settings.widget_helper_text'),
    })
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_discussions_count_label'),
        permission: 'widget.viewWidget.discussionsCount',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_posts_count_label'),
        permission: 'widget.viewWidget.postsCount',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_users_count_label'),
        permission: 'widget.viewWidget.usersCount',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_lastest_member_label'),
        permission: 'widget.viewWidget.latestMember',
        allowGuest: true,
      },
      'view'
    );
});
