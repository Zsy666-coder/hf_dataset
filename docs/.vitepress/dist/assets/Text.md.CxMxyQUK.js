import{_ as i,c as a,o as t,ae as n}from"./chunks/framework.Dh1jimFm.js";const o=JSON.parse('{"title":"四、Text","description":"","frontmatter":{},"headers":[],"relativePath":"Text.md","filePath":"Text.md"}'),h={name:"Text.md"};function e(p,s,l,k,d,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="四、text" tabindex="-1">四、Text <a class="header-anchor" href="#四、text" aria-label="Permalink to &quot;四、Text&quot;">​</a></h1><h2 id="一-直接解析" tabindex="-1">(一) 直接解析： <a class="header-anchor" href="#一-直接解析" aria-label="Permalink to &quot;(一) 直接解析：&quot;">​</a></h2><ol><li>每行是一个样本(默认按行解析)</li><li>文件必须是utf-8编码</li><li>默认移除换行符</li><li>默认不支持段落解析</li></ol><h2 id="二-textconfig定义解析规则" tabindex="-1">(二) TextConfig定义解析规则： <a class="header-anchor" href="#二-textconfig定义解析规则" aria-label="Permalink to &quot;(二) TextConfig定义解析规则：&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>作用</th></tr></thead><tbody><tr><td>encoding</td><td>str</td><td>&quot;utf-8&quot;</td><td>指定文本的编码格式（如 &quot;utf-8&quot;, &quot;ISO-8859-1&quot;）</td></tr><tr><td>encoding_errors</td><td>Optional[str]</td><td>None</td><td>处理编码错误的方式，如 &quot;ignore&quot;, &quot;replace&quot;</td></tr><tr><td>chunksize</td><td>int</td><td>10485760 (10MB)</td><td>每次读取的文本块大小，用于优化大文件解析</td></tr><tr><td>keep_linebreaks</td><td>bool</td><td>False</td><td>是否保留换行符（False 删除换行，True 保留）</td></tr><tr><td>sample_by</td><td>str</td><td>&quot;line&quot;</td><td>解析方式，&quot;line&quot; 按行解析，&quot;paragraph&quot; 按段落解析</td></tr></tbody></table><h2 id="三-e-g-有空行的txt" tabindex="-1">(三) e.g. 有空行的txt: <a class="header-anchor" href="#三-e-g-有空行的txt" aria-label="Permalink to &quot;(三) e.g. 有空行的txt:&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>This is paragraph one.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is paragraph two.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is paragraph three.</span></span></code></pre></div><ol><li>采用默认的解析方式，有5条记录：</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dataset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> load_dataset(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data_files</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/share/project/zsy/code/Agent/test/text.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataset)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataset[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;train&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>Output:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DatasetDict({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    train: Dataset({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        features: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        num_rows: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;This is paragraph one.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]}</span></span></code></pre></div><ol start="2"><li>使用sample_by = &#39;paragraph&#39;，则只有3条记录：</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dataset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> load_dataset(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data_files</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/share/project/zsy/code/Agent/test/text.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sample_by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;paragraph&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataset)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataset[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;train&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>Output:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DatasetDict({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    train: Dataset({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        features: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        num_rows: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;This is paragraph one.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;This is paragraph two.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]}</span></span></code></pre></div>`,15)]))}const g=i(h,[["render",e]]);export{o as __pageData,g as default};
