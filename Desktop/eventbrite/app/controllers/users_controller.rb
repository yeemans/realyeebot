class UsersController < ApplicationController
  def new
    @User = User.new
  end

  def create
    @User = User.create(user_params)
    sign_in(:user, @User)
  end

  def show
    
  end

end

def user_params()
  params.require(:user).permit(:name)
end