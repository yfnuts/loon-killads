#!name = Soul 去广告自制版
#!desc = 屏蔽开屏广告、礼物榜、发现页推广、更新弹窗、首页活动弹窗
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Soul.png
#!category = 去广告
#!mitm = api-a.soulapp.cn,post.soulapp.cn,ssp.soulapp.cn

[URL Rewrite]
^https:\/\/ssp\.soulapp\.cn\/api\/q reject-dict
^https:\/\/chat-live\.soulapp\.cn\/live\/planet\/recListV2 reject-200

[Script]
Soul_remove_splash = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/app\/splash,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/remove_splash.js
Soul_remove_gift = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/post\/gift\/list,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/remove_gift.js
Soul_remove_promotion = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/discover\/hot,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/remove_hot_topic.js
Soul_remove_update = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/app\/version,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/block_update.js
Soul_remove_popup = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/popup\/config,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/remove_popup.js
