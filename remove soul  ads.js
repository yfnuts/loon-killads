#!name = Soul 去广告自制版 v2
#!desc = 直接屏蔽广告域名，含开屏/礼物榜/推广/更新/弹窗
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Soul.png
#!category = 去广告
#!mitm = api-a.soulapp.cn,post.soulapp.cn,ssp.soulapp.cn,ad-r.soulapp.cn,soul-ad.soulapp.cn,base-growth.soulapp.cn

[URL Rewrite]
# ===== 开屏广告（直接拦截整个广告域名） =====
^https?:\/\/ad-r\.soulapp\.cn\/ reject
^https?:\/\/soul-ad\.soulapp\.cn\/ reject

# ===== 信息流广告 =====
^https:\/\/ssp\.soulapp\.cn\/api\/q reject-dict
^https:\/\/chat-live\.soulapp\.cn\/live\/planet\/recListV2 reject-200

# ===== 增长活动弹窗 =====
^https?:\/\/base-growth\.soulapp\.cn\/ reject

[Script]
Soul_remove_gift = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/post\/gift\/list,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/remove_gift.js
Soul_remove_promotion = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/discover\/hot,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/remove_hot_topic.js
Soul_remove_update = type=http-response,pattern=^https:\/\/api-a\.soulapp\.cn\/v2\/app\/version,requires-body=true,script-path=https://cdn.jsdelivr.net/gh【你的github用户名】/loon-script@main/block_update.js
