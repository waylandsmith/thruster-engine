obj = []

class GameObject

	@x = 0
	@y = 0
	@img = 0 
	@isVisible = true
	@isCollidable = true
	constructor: (@xCord, @yCrod, @image) ->
		@x = @xCord
		@y = @yCord
		@imgs = @images
		
		obj.push(this)

class Animation
	@sprites = 0
	@length = 0
	@currentFrame = 0
	
	constructor: (@imgs) ->
		@sprites = @imgs
		@length = @sprites.length

	rewind: ->
		@currentFrame = 0
		
	getCurrentSprite: ->
		sprites[currentFrame]

class LoopAnimation extends Animation
	@dir = 0
	
	constructor: (@imgs) ->
		super @imgs
	
	step: ->
		if @dir is 1
			if @currentFrame < @length 
				@currentFrame = @currentFrame + 1
			else
				@currentFrame = 0
		if @dir is -1
			if @currentFrame > 0
				@currenFrame = @currentFrame - 1
			else
				@currentFrame = @length - 1
				
	changeDir: (@i) ->
		@dir = @i
				
class PingPongAnimation extends Animation
	@dir = 0

	constructor: (@imgs) ->
		super @imgs

	step: ->
		if @dir is 1
			if @currentFrame < @length 
				@currentFrame = @currentFrame + 1
			else
				dir = -1
		else
			if @currentFrame > 0
				@currenFrame = @currentFrame - 1
			else 
				dir = 1

### class CustonAnimation extends Animation
	
	@order = 0
	@currentIndex = 0;
	
	constructor: (@imgs, @i) ->
		@order = @i
		super @imgs
		
	step: ->
		currentIndex
		

class Animal extends GameObject
	@anims = [] ###
	
	




testobj = new GameObject 5, 10, "Sprites Go Here!"
alert obj[0].imgs
