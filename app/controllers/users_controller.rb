class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.json  { render :json => @user }
      else
       
      end
    end

  end

  def new
    
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
