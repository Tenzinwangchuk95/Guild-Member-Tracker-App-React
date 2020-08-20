class MembersController < ApplicationController
    def index
        @members = Member.all
        render json: @members
    end

    def show
      render json: @member
    end

    def create
      @member = Member.new(member_params)

      if @member.save
        render json: @member, status: :created, location: @pet
      else 
        render json: @member.erros, status: :unprocessable_entity
      end
    end

    def destroy
      @member = Member.find(params[:id])
      @member.destroy
      render json: @member
    end


    private

    def set_member
      @member = Member.find(params[:id])
    end

    def member_params
      params.require(:member).permit(:name, :klass, :race, :level, :rank)
    end
    
end
