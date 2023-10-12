Rails.application.routes.draw do
  scope(controller: :accounts) do
    get 'profile', action: :profile
  end
end
