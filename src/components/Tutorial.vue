<template>
    <div class="container container-full tutorial">
        <div class="row no-gutter">
            <h2 id="why-base64-encoding">1. Why base64 encoding?</h2>

            <div id="tutorial-logo" class="right">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAaCAMAAABGmBj2AAAAjVBMVEUAAABkZFRmZlJhYU+rq5ulpZZoaFBfX01kZFFlZVKrq5tgYFBmZlKkpJuvr5+srJxlZVCrq5xmZlNfX06np5iqqp2iopRiYlCQkH2rq5tkZFKEhHygoJKRkX2QkHurq52IiHSKinaMjHiSknyqqpqSkn2ZmXeRkX1lZVKRkX2rq5xfX02goJKHh3SQkHwkgriDAAAAKHRSTlMAQIDHgMcg7qBgQBCPHxBQMKBQ27Ng27ORj3AF7oiocPHbyEEwMA92SIWyjwAAAslJREFUSMell+t2qjAQhYcgCXdQsbba2+ntFGj7/o93wgzJYILHhd0/NBNZ68tkZ4YIx9vvdkbft0cg1QFJwkS1O5VthDjUNAyM+IGyWq1WVQk2TrUKPbhtz+gBSOHnqD5mnMKZ2MaixwklMoDg00oAqlh3qBSMcGKlB5y7mz/jjfoaSJJiBaNi+0gyg6++OgdfdAavQeCKpj0885IxlhRueIHg498MnfHrZXgVhrTdG842xFx5haHI1Wdu8NtwEP5+M6CiXZruCuN8twRPWeSYDlsv2Pzhlz3uijT4AIyqgbSDqVZX4DPEs/W1NaOe7IuPb0YQq9RufC3FA+Kt9SHG0uX5YadZpZf83VX4g7U+BzLf7Et+Bp9qTuMl3yzGJ3zUFW52bs3v0Yx5/BNyqiZap0Da6ZkqWoIPhYg5RUkL2Vjzc6y5ZIqPxSBJO11Rod0B6r7r7sHDv7+Yuvh4PFP3OVe9sqvQyqjn7TPGkwKABo0mVSb5nYcvntvvVxy9Prfz+H3AVb8fPUimRFV7eM1h3djkXfzHHz34+QtwfPhpHbybvhrPYMyVX1P+vZzHN2WBzaegNvDk4o8vLerxXS/Dx8dBsNma6pbmoB0mbTjbIy/0vI8Yi7sfYR06+Mf2RLNtR+Gek/UsCaMEhrVz8pETYf0jMMVPB//QXsbTaw2/rbjt2658Ad8MRyCKoqHr3UcREOwS3qY3Ws+KLT7D0MWvT/DkBWsBHrMj6713MHcIF78a0v013mQ9Wp/xe15CTRH0c5ufDpRyvGGkV+MztDwk67eAkmS+6IXEQtA6uPiyo0q7o2UYLWq604OmbP3TOAaB1wtFheDddtbYb/FzDb/Db23G3P8U4vkguviiM/oqHPzCq+Y2O3nxmUBMHvDxsDP4Chz8oot2mHDCcGJ+suVrto+HlG57b+Dj//c3Y4n4P8WcijQtYU7/ANVG7hKeMxekAAAAAElFTkSuQmCC"
                     width="126" height="26" alt=""><br>
            </div>
            <p>
                Base64 encoded images can be embedded using <strong>img</strong> tags or <strong>CSS</strong>, speeding up load times for smaller images by preventing additional HTTP requests.
                This can be done to build single-file mockups / demo pages for your clients, HTML email signatures that will not trigger the nasty "show images" warning in email clients, etc.
            </p>

            <br>

            <h2 id="supported-image-formats">2. Supported image formats</h2>

            <p>
                This tool supports the most common image formats. These are <i>.jpeg</i>, <i>.png</i>, <i>.gif</i>, <i>.webp</i>, <i>.svg</i>
                and <i>.bmp</i>.
            </p>

            <br>

            <h2 id="how-to-convert-images">3. How to convert images</h2>

            <img id="tutorial-screenshot-01" class="right" src="@/assets/img/tutorial/base64-image-encoded-4d2c721aa7.png"
                 width="500" height="322" alt="" style="margin-left: 30px;">
            <p>
                At the <a href="index.html" target="_blank">home page</a>
                page you can convert your images by dragging them into your browser window, or click the upload button.<br>
            </p>
            <p>
                As soon as a file is uploaded, a <span class="success">green</span>
                result row will indicate that it's successfully encoded.
                If there is a <span class="error"><strong>red</strong></span>
                row, something went wrong and you will see an error on the right.
            </p>
            <p>
                You are allowed to upload up to 20 files at once.
            </p>

            <br>

            <h2 id="base64-as-image-src">4. Use base64 as image sources</h2>

            <p>
                You can use the base64 encoded string as a value of the <i>src</i>
                parameter, using a <i>data:image/...</i> construct.<br>
                <br>
                You can optain the example code by pressing the
                <span class="btn btn-xs btn-default">
                    <span class="fa fa-files-o"></span> copy image
                </span> button and it will be copied to your clipboard.
            </p>
            <p>
                If your client does not support copy to clipboard without
                <a href="https://get.adobe.com/de/flashplayer/" target="_blank">Flash</a>
                and you do not have <a href="https://get.adobe.com/de/flashplayer/" target="_blank">Flash</a> installed
                you can click the <span class="btn btn-xs btn-default"><span class="fa fa-code"></span> show code</span>
                button and copy the text manually from the first example that is shown in the dialog window.<br>
                <br>
                Your HTML code should look like this:
            </p>
            <pre><code class="language-markup">
            &lt;img src="data:image/jpeg;base64,/9j/4RiDRXhpZgAATU0AKgA..." width="100" height="50" alt="base64 test"&gt;
            </code></pre>
            <p>
                <br>
                <a href="http://codepen.io/anon/pen/QbVWXw?editors=100" target="_blank">
                    <i class="fa fa-fw fa-external-link"></i>
                </a>
                See the <a href="http://codepen.io/anon/pen/QbVWXw?editors=100" target="_blank">base64 image demo</a> at CodePen.
            </p>
            <br>

            <h2 id="base64-as-background-url">5. Use base64 as CSS background</h2>

            <p>
                You can use the base64 encoded string as a CSS background image, too. Simply feed the <i>url()</i>
                parameter with <i>data:image/...</i><br>
                <br>
                You can optain the example code by pressing the
                <span class="btn btn-xs btn-default">
                    <span class="fa fa-files-o"></span> copy css
                </span> button and it will be copied to your clipboard.
            </p>
            <p>
                If your client does not support copy to clipboard without
                <a href="https://get.adobe.com/de/flashplayer/" target="_blank">Flash</a>
                and you do not have <a href="https://get.adobe.com/de/flashplayer/" target="_blank">Flash</a> installed
                you can click the <span class="btn btn-xs btn-default"><span class="fa fa-code"></span> show code</span>
                button and copy the text manually from the second example that is shown in the dialog window.<br>
                <br>
                Your CSS code should look like this:
            </p>
            <pre><code class="language-css">
            .my-class {
                background: url('data:image/jpeg;base64,/9j/4RiDRXhpZgAATU0AKgA...');
            }
            </code></pre>
            <p>
                <br>
                <a href="http://codepen.io/anon/pen/BNOaXe?editors=110" target="_blank">
                    <i class="fa fa-fw fa-external-link"></i>
                </a>
                See the <a href="http://codepen.io/anon/pen/BNOaXe?editors=110" target="_blank">base64 CSS demo</a> at CodePen.
            </p>
        </div><!-- /row -->
    </div><!-- /container -->
</template>

<script>
  export default {
    name: 'Tutorial',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted () {

      /* **********************************************
           Begin prism-core.js
      ********************************************** */

      var _self = (typeof window !== 'undefined')
        ? window   // if in browser
        : (
          (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
            ? self // if in worker
            : {}   // if in node js
        );

      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       * MIT license http://www.opensource.org/licenses/mit-license.php/
       * @author Lea Verou http://lea.verou.me
       */

      var Prism = (function () {

// Private helper vars
        var lang = /\blang(?:uage)?-(\w+)\b/i;
        var uniqueId = 0;

        var _ = _self.Prism = {
          manual: _self.Prism && _self.Prism.manual,
          disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
          util: {
            encode: function (tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
              } else if (_.util.type(tokens) === 'Array') {
                return tokens.map(_.util.encode);
              } else {
                return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
              }
            },

            type: function (o) {
              return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
            },

            objId: function (obj) {
              if (!obj['__id']) {
                Object.defineProperty(obj, '__id', {value: ++uniqueId});
              }
              return obj['__id'];
            },

            // Deep clone a language definition (e.g. to extend it)
            clone: function (o) {
              var type = _.util.type(o);

              switch (type) {
                case 'Object':
                  var clone = {};

                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone[key] = _.util.clone(o[key]);
                    }
                  }

                  return clone;

                case 'Array':
                  return o.map(function (v) {
                    return _.util.clone(v);
                  });
              }

              return o;
            }
          },

          languages: {
            extend: function (id, redef) {
              var lang = _.util.clone(_.languages[id]);

              for (var key in redef) {
                lang[key] = redef[key];
              }

              return lang;
            },

            /**
             * Insert a token before another token in a language literal
             * As this needs to recreate the object (we cannot actually insert before keys in object literals),
             * we cannot just provide an object, we need anobject and a key.
             * @param inside The key (or language id) of the parent
             * @param before The key to insert before. If not provided, the function appends instead.
             * @param insert Object with the key/value pairs to insert
             * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
             */
            insertBefore: function (inside, before, insert, root) {
              root = root || _.languages;
              var grammar = root[inside];

              if (arguments.length == 2) {
                insert = arguments[1];

                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    grammar[newToken] = insert[newToken];
                  }
                }

                return grammar;
              }

              var ret = {};

              for (var token in grammar) {

                if (grammar.hasOwnProperty(token)) {

                  if (token == before) {

                    for (var newToken in insert) {

                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }

                  ret[token] = grammar[token];
                }
              }

              // Update references in other language definitions
              _.languages.DFS(_.languages, function (key, value) {
                if (value === root[inside] && key != inside) {
                  this[key] = ret;
                }
              });

              return root[inside] = ret;
            },

            // Traverse a language definition with Depth First Search
            DFS: function (o, callback, type, visited) {
              visited = visited || {};
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);

                  if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
                    visited[_.util.objId(o[i])] = true;
                    _.languages.DFS(o[i], callback, null, visited);
                  }
                  else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
                    visited[_.util.objId(o[i])] = true;
                    _.languages.DFS(o[i], callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},

          highlightAll: function (async, callback) {
            _.highlightAllUnder(document, async, callback);
          },

          highlightAllUnder: function (container, async, callback) {
            var env = {
              callback: callback,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };

            _.hooks.run("before-highlightall", env);

            var elements = env.elements || container.querySelectorAll(env.selector);

            for (var i = 0, element; element = elements[i++];) {
              _.highlightElement(element, async === true, env.callback);
            }
          },

          highlightElement: function (element, async, callback) {
            // Find language
            var language, grammar, parent = element;

            while (parent && !lang.test(parent.className)) {
              parent = parent.parentNode;
            }

            if (parent) {
              language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
              grammar = _.languages[language];
            }

            // Set language on the element, if not present
            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

            if (element.parentNode) {
              // Set language on the parent, for styling
              parent = element.parentNode;

              if (/pre/i.test(parent.nodeName)) {
                parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
              }
            }

            var code = element.textContent;

            var env = {
              element: element,
              language: language,
              grammar: grammar,
              code: code
            };

            _.hooks.run('before-sanity-check', env);

            if (!env.code || !env.grammar) {
              if (env.code) {
                _.hooks.run('before-highlight', env);
                env.element.textContent = env.code;
                _.hooks.run('after-highlight', env);
              }
              _.hooks.run('complete', env);
              return;
            }

            _.hooks.run('before-highlight', env);

            if (async && _self.Worker) {
              var worker = new Worker(_.filename);

              worker.onmessage = function (evt) {
                env.highlightedCode = evt.data;

                _.hooks.run('before-insert', env);

                env.element.innerHTML = env.highlightedCode;

                callback && callback.call(env.element);
                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env);
              };

              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            }
            else {
              env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

              _.hooks.run('before-insert', env);

              env.element.innerHTML = env.highlightedCode;

              callback && callback.call(element);

              _.hooks.run('after-highlight', env);
              _.hooks.run('complete', env);
            }
          },

          highlight: function (text, grammar, language) {
            var tokens = _.tokenize(text, grammar);
            return Token.stringify(_.util.encode(tokens), language);
          },

          matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
            var Token = _.Token;

            for (var token in grammar) {
              if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                continue;
              }

              if (token == target) {
                return;
              }

              var patterns = grammar[token];
              patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

              for (var j = 0; j < patterns.length; ++j) {
                var pattern = patterns[j],
                  inside = pattern.inside,
                  lookbehind = !!pattern.lookbehind,
                  greedy = !!pattern.greedy,
                  lookbehindLength = 0,
                  alias = pattern.alias;

                if (greedy && !pattern.pattern.global) {
                  // Without the global flag, lastIndex won't work
                  var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
                  pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
                }

                pattern = pattern.pattern || pattern;

                // Don’t cache length as it changes during the loop
                for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

                  var str = strarr[i];

                  if (strarr.length > text.length) {
                    // Something went terribly wrong, ABORT, ABORT!
                    return;
                  }

                  if (str instanceof Token) {
                    continue;
                  }

                  pattern.lastIndex = 0;

                  var match = pattern.exec(str),
                    delNum = 1;

                  // Greedy patterns can override/remove up to two previously matched tokens
                  if (!match && greedy && i != strarr.length - 1) {
                    pattern.lastIndex = pos;
                    match = pattern.exec(text);
                    if (!match) {
                      break;
                    }

                    var from = match.index + (lookbehind ? match[1].length : 0),
                      to = match.index + match[0].length,
                      k = i,
                      p = pos;

                    for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
                      p += strarr[k].length;
                      // Move the index i to the element in strarr that is closest to from
                      if (from >= p) {
                        ++i;
                        pos = p;
                      }
                    }

                    /*
                     * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
                     * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
                     */
                    if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
                      continue;
                    }

                    // Number of tokens to delete and replace with the new match
                    delNum = k - i;
                    str = text.slice(pos, p);
                    match.index -= pos;
                  }

                  if (!match) {
                    if (oneshot) {
                      break;
                    }

                    continue;
                  }

                  if (lookbehind) {
                    lookbehindLength = match[1].length;
                  }

                  var from = match.index + lookbehindLength,
                    match = match[0].slice(lookbehindLength),
                    to = from + match.length,
                    before = str.slice(0, from),
                    after = str.slice(to);

                  var args = [i, delNum];

                  if (before) {
                    ++i;
                    pos += before.length;
                    args.push(before);
                  }

                  var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

                  args.push(wrapped);

                  if (after) {
                    args.push(after);
                  }

                  Array.prototype.splice.apply(strarr, args);

                  if (delNum != 1)
                    _.matchGrammar(text, strarr, grammar, i, pos, true, token);

                  if (oneshot)
                    break;
                }
              }
            }
          },

          tokenize: function (text, grammar, language) {
            var strarr = [text];

            var rest = grammar.rest;

            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }

              delete grammar.rest;
            }

            _.matchGrammar(text, strarr, grammar, 0, 0, false);

            return strarr;
          },

          hooks: {
            all: {},

            add: function (name, callback) {
              var hooks = _.hooks.all;

              hooks[name] = hooks[name] || [];

              hooks[name].push(callback);
            },

            run: function (name, env) {
              var callbacks = _.hooks.all[name];

              if (!callbacks || !callbacks.length) {
                return;
              }

              for (var i = 0, callback; callback = callbacks[i++];) {
                callback(env);
              }
            }
          }
        };

        var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          // Copy of the full string this token was created from
          this.length = (matchedStr || "").length | 0;
          this.greedy = !!greedy;
        };

        Token.stringify = function (o, language, parent) {
          if (typeof o == 'string') {
            return o;
          }

          if (_.util.type(o) === 'Array') {
            return o.map(function (element) {
              return Token.stringify(element, language, o);
            }).join('');
          }

          var env = {
            type: o.type,
            content: Token.stringify(o.content, language, parent),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language,
            parent: parent
          };

          if (o.alias) {
            var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
            Array.prototype.push.apply(env.classes, aliases);
          }

          _.hooks.run('wrap', env);

          var attributes = Object.keys(env.attributes).map(function (name) {
            return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
          }).join(' ');

          return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

        };

        if (!_self.document) {
          if (!_self.addEventListener) {
            // in Node.js
            return _self.Prism;
          }

          if (!_.disableWorkerMessageHandler) {
            // In worker
            _self.addEventListener('message', function (evt) {
              var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code,
                immediateClose = message.immediateClose;

              _self.postMessage(_.highlight(code, _.languages[lang], lang));
              if (immediateClose) {
                _self.close();
              }
            }, false);
          }

          return _self.Prism;
        }

//Get current script and highlight
        var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

        if (script) {
          _.filename = script.src;

          if (!_.manual && !script.hasAttribute('data-manual')) {
            if (document.readyState !== "loading") {
              if (window.requestAnimationFrame) {
                window.requestAnimationFrame(_.highlightAll);
              } else {
                window.setTimeout(_.highlightAll, 16);
              }
            }
            else {
              document.addEventListener('DOMContentLoaded', _.highlightAll);
            }
          }
        }

        return _self.Prism;

      })();

      if (typeof module !== 'undefined' && module.exports) {
        module.exports = Prism;
      }

// hack for components to work correctly in node.js
      if (typeof global !== 'undefined') {
        global.Prism = Prism;
      }


      /* **********************************************
           Begin prism-markup.js
      ********************************************** */

      Prism.languages.markup = {
        'comment': / <!--[\s\S]*?-->/,
        'prolog': /<\?[\s\S]+?\?>/,
        'doctype': /<!DOCTYPE[\s\S]+?>/i,
        'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
        'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
          inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
              inside: {
              'punctuation': /^<\/?/,
                'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
              inside: {
              'punctuation': [
                /^=/,
                {
                  pattern: /(^|[^\\])["']/,
                  lookbehind: true
                }
              ]
            }
          },
          'punctuation': /\/?>/,
            'attr-name': {
            pattern: /[^\s>\/]+/,
              inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };

      Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
        Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
      Prism.hooks.add('wrap', function (env) {

        if (env.type === 'entity') {
          env.attributes['title'] = env.content.replace(/&amp;/, '&');
        }
      });

      Prism.languages.xml = Prism.languages.markup;
      Prism.languages.html = Prism.languages.markup;
      Prism.languages.mathml = Prism.languages.markup;
      Prism.languages.svg = Prism.languages.markup;


      /* **********************************************
           Begin prism-css.js
      ********************************************** */

      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
          inside: {
            'rule': /@[\w-]+/
            // See rest below
          }
        },
        'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
        'string': {
          pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /\B!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:]/
      };

      Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

      if (Prism.languages.markup) {
        Prism.languages.insertBefore('markup', 'tag', {
          'style': {
            pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
            lookbehind: true,
            inside: Prism.languages.css,
            alias: 'language-css',
            greedy: true
          }
        });

        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, Prism.languages.markup.tag);
      }

      /* **********************************************
           Begin prism-clike.js
      ********************************************** */

      Prism.languages.clike = {
        'comment': [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true
          }
        ],
        'string': {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        'class-name': {
          pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
          lookbehind: true,
          inside: {
            punctuation: /[.\\]/
          }
        },
        'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        'boolean': /\b(?:true|false)\b/,
        'function': /[a-z0-9_]+(?=\()/i,
        'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
        'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        'punctuation': /[{}[\];(),.:]/
      };


      /* **********************************************
           Begin prism-javascript.js
      ********************************************** */

      Prism.languages.javascript = Prism.languages.extend('clike', {
        'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        'number': /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
        'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
      });

      Prism.languages.insertBefore('javascript', 'keyword', {
        'regex': {
          pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
          lookbehind: true,
          greedy: true
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        'function-variable': {
          pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
          alias: 'function'
        }
      });

      Prism.languages.insertBefore('javascript', 'string', {
        'template-string': {
          pattern: /`(?:\\[\s\S]|[^\\`])*`/,
          greedy: true,
          inside: {
            'interpolation': {
              pattern: /\$\{[^}]+\}/,
              inside: {
                'interpolation-punctuation': {
                  pattern: /^\$\{|\}$/,
                  alias: 'punctuation'
                },
                rest: Prism.languages.javascript
              }
            },
            'string': /[\s\S]+/
          }
        }
      });

      if (Prism.languages.markup) {
        Prism.languages.insertBefore('markup', 'tag', {
          'script': {
            pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript,
            alias: 'language-javascript',
            greedy: true
          }
        });
      }

      Prism.languages.js = Prism.languages.javascript;


      /* **********************************************
           Begin prism-file-highlight.js
      ********************************************** */

      (function () {
        if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
          return;
        }

        self.Prism.fileHighlight = function () {

          var Extensions = {
            'js': 'javascript',
            'py': 'python',
            'rb': 'ruby',
            'ps1': 'powershell',
            'psm1': 'powershell',
            'sh': 'bash',
            'bat': 'batch',
            'h': 'c',
            'tex': 'latex'
          };

          Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
            var src = pre.getAttribute('data-src');

            var language, parent = pre;
            var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
            while (parent && !lang.test(parent.className)) {
              parent = parent.parentNode;
            }

            if (parent) {
              language = (pre.className.match(lang) || [, ''])[1];
            }

            if (!language) {
              var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
              language = Extensions[extension] || extension;
            }

            var code = document.createElement('code');
            code.className = 'language-' + language;

            pre.textContent = '';

            code.textContent = 'Loading…';

            pre.appendChild(code);

            var xhr = new XMLHttpRequest();

            xhr.open('GET', src, true);

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {

                if (xhr.status < 400 && xhr.responseText) {
                  code.textContent = xhr.responseText;

                  Prism.highlightElement(code);
                }
                else if (xhr.status >= 400) {
                  code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
                }
                else {
                  code.textContent = '✖ Error: File does not exist or is empty';
                }
              }
            };

            xhr.send(null);
          });

        };

        document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

      })();

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
