/* Desktop chat appearance. Reference canvas: 1760 × 1278. */
const wxIcons={
 chat:'<path d="M21 10.4c0 4.3-4 7.6-9 7.6-1.2 0-2.3-.2-3.3-.5L4 20l1.2-4.3C3.8 14.3 3 12.5 3 10.4 3 6.3 7 3 12 3s9 3.3 9 7.4Z"/>',
 people:'<circle cx="9.2" cy="6.2" r="3.5"/><path d="M1.5 20v-1.5c0-7 15.5-7 15.5 0V20ZM17 7h5M18 12h4"/>',
 cube:'<path d="m12 1.8 9 5.1v10.2l-9 5.1-9-5.1V6.9Z M3 6.9l9 5.2 9-5.2M12 12.1v10.1"/>',
 compass:'<circle cx="12" cy="12" r="10"/><path d="m16.5 7.5-2.8 6.2-6.2 2.8 2.8-6.2Z"/>',
 phone:'<rect x="5" y="1.5" width="14" height="21" rx="1.4"/><path d="M11.7 19h.6"/>',
 menu:'<path d="M3 5h18M3 12h18M3 19h18"/>',
 search:'<circle cx="10" cy="10" r="7"/><path d="m15.2 15.2 6 6"/>',
 plus:'<circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/>',
 more:'<circle cx="4" cy="12" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="20" cy="12" r="1.1" fill="currentColor"/>',
 dots:'<path d="M21 10c0 4-4 7-8.5 7a11 11 0 0 1-3.7-.6L4 19l1-4.5A6.7 6.7 0 0 1 4 10c0-4 4-7 8.5-7S21 6 21 10Z"/><path d="M9 10h.01M12.5 10h.01M16 10h.01"/>',
 call:'<path d="m5 2 4 4-2 3c2 4 4 6 8 8l3-2 4 4-2 3c-7 2-20-11-18-18Z"/><path d="M15 2h4v5h-4ZM19 3l3-1v5l-3-1"/>',
 smile:'<circle cx="12" cy="12" r="10"/><path d="M6.5 13a5.5 5.5 0 0 0 11 0ZM8 7v1M16 7v1"/>',
 folder:'<path d="M2 7h20v14H2ZM2 7V3h8l3 4"/>',
 scissors:'<circle cx="6" cy="18" r="3"/><circle cx="17" cy="18" r="3"/><path d="m7 2 9 14M18 2 8 15"/>',
 chevron:'<path d="m8 10 4 4 4-4"/>',
 mic:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v4"/>',
 voice:'<circle cx="12" cy="12" r="10"/><path d="M8 10v4M11 7q5 5 0 10M14 5q7 7 0 14"/>',
 pin:'<path d="M8 2h8l-2 5 4 7H6l4-7ZM12 14v8"/>',
 min:'<path d="M4 12h16"/>',
 max:'<rect x="4" y="4" width="16" height="16" rx="1"/>',
 close:'<path d="m4 4 16 16M20 4 4 20"/>'
};
const wxSvg=name=>icon(wxIcons[name]);
function selfAvatarMarkup(){return data.selfAvatar?'<img alt="" src="'+esc(data.selfAvatar)+'">':'<svg viewBox="0 0 72 72" aria-hidden="true"><rect width="72" height="72" fill="#b9d7df"/><path d="M0 43 25 16 50 43" fill="#778f89"/><path d="m13 29 12-13 12 13-12-5Z" fill="#e3ece9"/><path d="M0 48q20-14 39-2t33-9v35H0" fill="#6c9279"/><path d="M0 61q24-10 44-2t28-4v17H0" fill="#b5bca2"/></svg>'}
function refreshSelfAvatars(){$$('.wx-self-avatar,.message.self .avatar').forEach(el=>el.innerHTML=selfAvatarMarkup())}
function applyWechatTheme(){const theme=data.wechatTheme==='dark'?'dark':'light';$('.wechat').setAttribute('data-theme',theme);$('#modal').setAttribute('data-wx-theme',theme);$$('[data-wx-theme-choice]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.wxThemeChoice===theme)))}
function setWechatTheme(theme){if(!['light','dark'].includes(theme))return;data.wechatTheme=theme;persist();applyWechatTheme()}
function wxThemeChoices(){return '<div class="wx-theme-choices">'+[['light','浅色'],['dark','深色']].map(([key,label])=>`<button type="button" data-wx-theme-choice="${key}" aria-pressed="${(data.wechatTheme||'light')===key}" onclick="setWechatTheme('${key}')"><span class="wx-theme-sample ${key}"></span>${label}</button>`).join('')+'</div>'}
restyleWechat=function(){
 $('.wx-titlebar').innerHTML='<span class="wx-app-name">微信</span><div><button type="button" title="置顶标记" aria-pressed="false" onclick="this.setAttribute(\'aria-pressed\',this.getAttribute(\'aria-pressed\')!==\'true\')">'+wxSvg('pin')+'</button><button title="返回工作台" onclick="endChat()">'+wxSvg('min')+'</button><button title="窗口适配" onclick="document.querySelector(\'.wechat\').classList.toggle(\'expanded\')">'+wxSvg('max')+'</button><button title="退出皮肤" onclick="endChat()">'+wxSvg('close')+'</button></div>';
 $('.wxrail').innerHTML='<div class="avatar wx-self-avatar">'+selfAvatarMarkup()+'</div><div class="wx-rail-top"><button class="rail-active" title="聊天">'+wxSvg('chat')+'</button><button title="联系人">'+wxSvg('people')+'</button><button title="词典" onclick="endChat();navigate(\'dicts\')">'+wxSvg('cube')+'</button><button title="返回工作台" onclick="endChat()">'+wxSvg('compass')+'</button></div><div class="wx-rail-bottom"><button title="手机">'+wxSvg('phone')+'</button><button title="菜单">'+wxSvg('menu')+'</button></div>';
 $('.contacts').innerHTML='<div class="search"><div class="wx-search-box">'+wxSvg('search')+'<span>搜索</span></div><button title="添加">'+wxSvg('plus')+'</button></div><div class="contact"><div class="avatar wx-transfer"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 15h11l4 4h15v19H9Z" fill="white"/><path d="M18 27h11m-4-4 4 4-4 4" stroke="#00c567" stroke-width="3" fill="none"/></svg></div><div><b>文件传输助手</b><small>暂无消息</small></div></div><div class="contact active"><div class="avatar" id="contact-avatar"></div><div><b class="contact-name"></b><small id="contact-preview"></small></div></div><div class="contact wx-team-row"><div class="avatar wx-team"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29 24c0 7-7 12-15 10l-5 3 1-6C1 23 7 13 17 13c7 0 12 5 12 11Z" fill="white"/><path d="M43 31c0 7-6 11-13 10l-4 2v-5c-9-7-4-16 5-16 7 0 12 4 12 9Z" fill="white" stroke="#00c567" stroke-width="1.5"/><g fill="#00c567"><circle cx="14" cy="22" r="1.5"/><circle cx="22" cy="22" r="1.5"/><circle cx="29" cy="29" r="1.3"/><circle cx="36" cy="29" r="1.3"/></g></svg></div><div><b>微信团队</b><small>暂无消息</small></div></div>';
 $('.chat-title').innerHTML='<span class="contact-name"></span><div class="chat-header-tools"><span aria-hidden="true" class="wx-chat-detail">'+wxSvg('dots')+wxSvg('chevron')+'</span><button title="通话">'+wxSvg('call')+'</button><button id="chat-options" title="会话设置">'+wxSvg('more')+'</button></div>';
 $('#chat-options').onclick=openChatSettings;
 $('.compose-tools>span').innerHTML=wxSvg('smile')+wxSvg('cube')+wxSvg('folder')+'<span class="wx-cut">'+wxSvg('scissors')+wxSvg('chevron')+'</span>'+wxSvg('mic');
 const voice=document.createElement('span');voice.className='wx-voice';voice.innerHTML=wxSvg('voice');$('.compose').append(voice);
 $('#send').textContent='发送';$('#input').addEventListener('input',()=>$('#send').classList.toggle('has-text',!!$('#input').value.trim()));
 syncContact();applyWechatTheme();
};
openChatSettings=function(){
 $('#modal').classList.add('wx-dialog');
 $('#modal-body').innerHTML=`<h2>会话设置</h2><div class="wx-setting-label">外观</div>${wxThemeChoices()}<div class="field"><label for="wx-study-mode">学习模式</label><select id="wx-study-mode"><option value="learn">学习模式</option><option value="dictate">默写 · 中文→外语</option><option value="reverse">回车翻译 · 外语→中文</option></select></div><label class="notice-setting"><input type="checkbox" ${data.correctNotice?'checked':''} onchange="setNotice(this.checked)">答对后显示拍一拍提示</label><div class="wx-settings-actions"><button id="wx-collect">收藏当前单词</button><button id="wx-contact-settings">联系人与学习设置</button></div><p>空回车继续学习或查看释义，Shift+Enter 换行。Esc 返回工作台并结束计时。</p>`;
 $('#wx-study-mode').value=mode;$('#wx-study-mode').onchange=e=>{$('#mode').value=e.target.value;$('#mode').onchange({target:$('#mode')});refreshSelfAvatars()};
 $('#wx-collect').onclick=()=>saveWord();$('#wx-contact-settings').onclick=()=>{$('#modal').close();endChat();navigate('settings')};applyWechatTheme();$('#modal').showModal();
};
const wxBaseRender=render;
render=function(){wxBaseRender();if(page==='settings'){const field=document.createElement('div');field.className='field';field.innerHTML='<label>微信皮肤外观</label>'+wxThemeChoices();$('#settings-form').insertBefore(field,$('#settings-form .primary'));}applyWechatTheme()};
const wxBaseStartChat=startChat;
startChat=function(){wxBaseStartChat();refreshSelfAvatars();applyWechatTheme()};
const wxBaseMessage=message;
message=function(text,self=false){wxBaseMessage(text,self);if(self)refreshSelfAvatars()};
$('#modal').addEventListener('close',()=>$('#modal').classList.remove('wx-dialog'));
restyleWechat();

