<?php

namespace Common\Core\Prerender;

use Common\Core\AppUrl;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Request;

trait HandlesSeo
{
    /**
     * @param array $data
     * @param array $options
     * @return Response|void
     */
    protected function handleSeo(&$data = [], $options = [])
    {
        if (Request::method() === 'GET') {
            $data['seo'] = $this->getMetaTags($data, $options) ?: null;
        }

        if (defined('SHOULD_PRERENDER')) {
            $viewName = Arr::get($options, 'prerender.view') ?: $this->namespaceFromRouteAction();
            $viewPath = "prerender.$viewName";
            $view = null;

            // load view from app views folder or fall back to common views otherwise
            if (view()->exists($viewPath)) {
                $view = view($viewPath);
            } else {
                $view = view("common::$viewPath");
            }

            return response($view->with(['meta' =>  $data['seo'], 'htmlBaseUri' => app(AppUrl::class)->htmlBaseUri]));
        }
    }

    /**
     * @param array $data
     * @param array $options
     * @return MetaTags|void
     */
    protected function getMetaTags($data = [], $options = [])
    {
        $namespace = Arr::get($options, 'prerender.config', $this->namespaceFromRouteAction());

        if ($seoConfig = config("seo.$namespace")) {
            $dataForSeo = Arr::get($options, 'prerender.dataForSeo') ?: $data;
            return new MetaTags($seoConfig, $dataForSeo, $namespace);
        }
    }

    /**
     * @return string
     */
    protected function namespaceFromRouteAction()
    {
        // 'App/Http/Controllers/ArtistController@show'
        $uses = request()->route()->action['uses'];

        // get resource name and verb from route action
        preg_match('/\\\(\w+?)Controller@(\w+)$/', $uses, $matches);
        $resource = Str::kebab($matches[1]);
        $verb = Str::kebab($matches[2]);
        return "$resource.$verb";
    }
}
