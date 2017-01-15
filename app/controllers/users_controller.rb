class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      
    else

    end
  end

  def new
    
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :password, :email, :password_confirmation)
    end
end
