<?php

use Cmf\Database\Migration;
use Cmf\Group\Group;

return
    Migration::addPermissions([
        'widget.viewWidget.discussionsCount' => Group::GUEST_ID,
        'widget.viewWidget.postsCount'       => Group::GUEST_ID,
        'widget.viewWidget.usersCount'       => Group::GUEST_ID,
        'widget.viewWidget.latestMember'     => Group::GUEST_ID,
    ]);
