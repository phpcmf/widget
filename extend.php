<?php

namespace Cmf\Widget;

use Cmf\Api\Serializer\SiteSerializer;
use Cmf\Discussion\Discussion;
use Cmf\Extend;
use Cmf\Post\Post;
use Cmf\User\User;

return [
    (new Extend\Frontend('site'))
        ->js(__DIR__.'/js/dist/site.js')
        ->css(__DIR__.'/less/site.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
        ->serializeToSite(
            'widget.ignore_private_discussions',
            'widget.ignore_private_discussions',
            'boolval'
        )
        ->serializeToSite(
            'widget.widget_order',
            'widget.widget_order',
            'intval',
            0
        ),

    (new Extend\ApiSerializer(SiteSerializer::class))
    ->attributes(function ($serializer, $model, $attributes) {
        if ($serializer->getActor()->can('widget.viewWidget.discussionsCount')) {
            $attributes['widget.discussionsCount'] = $attributes['widget.ignore_private_discussions'] ?
            Discussion::where('is_private', 0)->count() : Discussion::count();
        }

        if ($serializer->getActor()->can('widget.viewWidget.postsCount')) {
            $attributes['widget.postsCount'] = Post::where('type', 'comment')->count();
        }
        if ($serializer->getActor()->can('widget.viewWidget.usersCount')) {
            $attributes['widget.usersCount'] = User::count();
        }
        if ($serializer->getActor()->can('widget.viewWidget.latestMember')) {
            $lastUser = User::orderBy('joined_at', 'DESC')->limit(1)->first();

            $attributes['widget.lastUserId'] = $lastUser != null ? $lastUser->id : null;
        }

        return $attributes;
    }),
];
