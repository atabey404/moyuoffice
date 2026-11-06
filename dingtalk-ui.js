/* DingTalk appearance shares the established vocabulary engine and progress. */
let currentSkin='wechat';
const dingStart=startChat;
const wechatParts={};
for(const key of ['.wx-titlebar','.wxrail','.contacts','.chat-title','.compose-tools>span'])wechatParts[key]=$(key).innerHTML;
function skinNavIcon(name){return wxSvg(name)}
function applySkin(){
 const ding=currentSkin==='dingtalk';$('.wechat').classList.toggle('dingtalk',ding);
 if(!ding){for(const key in wechatParts)$(key).innerHTML=wechatParts[key];$('#chat-options').onclick=openChatSettings;syncContact();applyWechatTheme();return}
 $('.wechat').setAttribute('data-theme','light');
 $('.wx-titlebar').innerHTML='<div class="ding-global-search">⌕　搜索或提问 (Ctrl+Shift+F)</div><div><button title="返回工作台" onclick="endChat()">'+wxSvg('min')+'</button><button title="窗口适配" onclick="document.querySelector(\'.wechat\').classList.toggle(\'expanded\')">'+wxSvg('max')+'</button><button title="退出皮肤" onclick="endChat()">'+wxSvg('close')+'</button></div>';
 const nav=[['cube','千问办公'],['chat','消息'],['folder','文档'],['cube','AI 表格'],['mic','AI 听记'],['cube','工作台'],['people','通讯录'],['call','会议'],['max','日历'],['pin','待办'],['compass','DING'],['more','更多']];
 $('.wxrail').innerHTML='<div class="ding-profile"><div class="avatar wx-self-avatar">'+selfAvatarMarkup()+'</div><span>我的工作空间</span></div><div class="ding-nav">'+nav.map(([i,t])=>'<button type="button" '+(t==='消息'?'class="selected"':'')+'>'+skinNavIcon(i)+'<span>'+t+'</span></button>').join('')+'</div><button class="ding-exit" onclick="endChat()">'+wxSvg('min')+'<span>返回工作台</span></button>';
 const row=(name,preview,cls='')=>'<div class="contact '+cls+'"><div class="avatar">'+esc(name.slice(0,1))+'</div><div><b>'+name+'</b><small>'+preview+'</small></div></div>';
 $('.contacts').innerHTML='<div class="search"><span>☰　通知 ×</span><b>消息</b><span>未读</span></div><div class="contact active"><div class="avatar" id="contact-avatar"></div><div><b class="contact-name"></b><small id="contact-preview"></small></div></div>'+row('员工关怀','今天也要照顾好自己')+row('团队邀请','暂无新消息')+row('钉钉安全助手','Account Security')+row('项目协作群','暂无消息')+row('钉钉小秘书','[交互卡片消息]')+row('AI助理','暂无消息');
 $('.chat-title').innerHTML='<div class="avatar ding-header-avatar"></div><span class="contact-name"></span><div class="chat-header-tools"><span>'+wxSvg('call')+'</span><span>'+wxSvg('folder')+'</span><span>'+wxSvg('people')+'</span><button id="chat-options" title="会话设置">'+wxSvg('more')+'</button></div>';
 $('#chat-options').onclick=openChatSettings;
 $('.compose-tools>span').innerHTML=wxSvg('smile')+'<span>♧</span><span>@</span><span>Aa</span>'+wxSvg('scissors')+wxSvg('folder')+wxSvg('plus');
 $('#input').placeholder='请输入消息';syncContact();$('.ding-header-avatar').innerHTML=$('#contact-avatar').innerHTML;refreshSelfAvatars();setupDingProfile();
}
function setupDingProfile(){
 const label=$('.ding-profile>span');label.textContent=data.dingWorkspaceName||'我的工作空间';label.tabIndex=0;label.setAttribute('role','button');label.title='点击修改名字';
 const edit=()=>{if(label.querySelector('input'))return;const input=document.createElement('input');input.className='ding-name-input';input.maxLength=24;input.value=data.dingWorkspaceName||'我的工作空间';input.setAttribute('aria-label','工作空间名字');label.replaceChildren(input);let done=false;const finish=save=>{if(done)return;done=true;if(save){data.dingWorkspaceName=input.value.trim()||'我的工作空间';persist()}label.textContent=data.dingWorkspaceName||'我的工作空间'};input.onblur=()=>finish(true);input.onkeydown=e=>{if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();e.stopPropagation();finish(e.key==='Enter')}};input.focus({preventScroll:true});input.select()};
 label.onclick=edit;label.onkeydown=e=>{if(e.target===label&&(e.key==='Enter'||e.key===' ')){e.preventDefault();edit()}};
 $$('.dingtalk .avatar').forEach(el=>{const row=el.closest('.contact');const self=el.classList.contains('wx-self-avatar');const key=self?'self':row?.classList.contains('active')||el.classList.contains('ding-header-avatar')?'contact':row?.querySelector('b')?.textContent;if(!key)return;el.dataset.dingAvatar=key;el.tabIndex=0;el.setAttribute('role','button');el.title='点击上传头像';el.setAttribute('aria-label','更改'+(key==='self'?'我的':key==='contact'?'联系人':key)+'头像');if(data.dingAvatars?.[key])el.innerHTML='<img alt="" src="'+esc(data.dingAvatars[key])+'">';el.onclick=()=>uploadDingAvatar(key);el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();uploadDingAvatar(key)}}});
}
function uploadDingAvatar(key){
 const picker=document.createElement('input');picker.type='file';picker.accept='image/png,image/jpeg,image/webp,image/gif';picker.onchange=async()=>{const file=picker.files[0];if(!file)return;if(!['image/png','image/jpeg','image/webp','image/gif'].includes(file.type)||file.size>2*1024*1024)return toast('请选择不超过 2 MB 的图片');try{const url=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file)});if(key==='self')data.selfAvatar=url;else if(key==='contact')data.avatar=url;else{data.dingAvatars=data.dingAvatars||{};data.dingAvatars[key]=url}persist();syncContact();refreshSelfAvatars();$('.ding-header-avatar').innerHTML=avatar();if(key==='contact')$$('.message:not(.self) .avatar').forEach(el=>el.innerHTML=avatar());setupDingProfile();toast('头像已更新')}catch{toast('图片保存失败，请尝试更小的图片')}};picker.click();
}
startChat=function(isReview=false,skin='wechat'){currentSkin=skin;applySkin();dingStart(isReview);if(currentSkin==='dingtalk'){$('.wechat').setAttribute('data-theme','light');$('#send').textContent='发送(S)'}};
const dingTheme=applyWechatTheme;
applyWechatTheme=function(){dingTheme();if(currentSkin==='dingtalk'){$('.wechat').setAttribute('data-theme','light');$('#modal').setAttribute('data-wx-theme','light')}};
const dingSettings=openChatSettings;
openChatSettings=function(){dingSettings();if(currentSkin==='dingtalk'){$$('.wx-theme-choices,.wx-setting-label').forEach(el=>el.hidden=true)}};
const originalSkinCard=skinCard;
skinCard=function(type,title,desc,available){if(title.includes('钉钉'))return originalSkinCard('blue-bg',title,'聊天式学习 / 回车翻译 / 已学词默写',true).replace('onclick="startChat()"',"onclick=\"startChat(false,'dingtalk')\"").replace('进入微信皮肤','进入钉钉皮肤');return originalSkinCard(type,title,desc,available)};
const dingRender=render;
render=function(){dingRender();const count=$('nav [data-page="skins"] em');if(count)count.textContent='02';if(page==='home'){const grid=$('.skin-grid');if(grid)grid.insertAdjacentHTML('beforeend',skinCard('blue-bg','钉钉 · 工作消息','',true))}if(page==='skins'){const p=$('#content>p');if(p)p.textContent='微信与钉钉皮肤免费使用，学习记录共通。'}};
render();
