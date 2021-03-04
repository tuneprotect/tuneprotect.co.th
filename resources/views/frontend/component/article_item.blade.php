<a
    data-gtm="{{strtolower($controller)}}-{{$article->friendly_url}}"
    href="{{route('current',['locale' => $locale,'controller' => $controller,'func' => $article->friendly_url ],false)}}"
    class="article_item">
    <div class="img">
        <img src="{{url($article->pic)}}" alt="{{$article->locales[$locale]->title}}">
    </div>
    <div class="content">
        <h3>{{$article->locales[$locale]->title}}</h3>
        <p>{{$article->locales[$locale]->sub_title}}</p>
        <time>{{date(config('project.short_date'),strtotime($article->action_date))  }}</time>
    </div>
</a>
