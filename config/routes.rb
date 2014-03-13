Tenon::Engine.routes.draw do
  devise_for :users, class_name: "Tenon::User", module: :devise

  resources :assets do
    post 'encode_notify', :on => :collection
    get :crop, :on => :member
  end

  resources :banners, :except => [:show] do
    post    'reorder', :on => :collection
  end

  resources :comments, :only => [:index, :destroy] do
    get 'approve', :on => :member
    get 'unapprove', :on => :member
  end

  resources :events, :except => [:show]

  resources :galleries, :except => [:show] do
    post    'reorder', :on => :collection
  end

  resources :item_assets, :except => [:index, :show]

  resources :pages do
    post    'reorder', :on => :collection
  end

  resources :post_categories

  resources :posts do
    post :reorder, :on => :collection
  end

  resource :settings, :only => [:show, :update]

  resources :tenon_callouts do
    post    'reorder', :on => :collection
  end

  resources :users, :except => [:show] do
    get 'approve', :on => :member
  end

  root :to => 'index#index'
end