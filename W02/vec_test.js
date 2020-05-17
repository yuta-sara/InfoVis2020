//Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}
    
//Add method
Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}
    
    
Vec3.prototype.sum = function()
{
    return this.x+this.y+this.z;
}

    
Vec3.prototype.min = function()
{
    var min = this.x;
    if(min > this.y)
    {
        min = this.y;
    }
    if(min > this.z)
    {
        min = this.z;
    }
    return min;
}

Vec3.prototype.mid = function()
{
    var min = this.x;
    if(min > this.y)
    {
        min = this.y;
    }
    if(min > this.z)
    {
        min = this.z;
    }

    if(min == this.x)
    {
        if(this.y < this.z)
        {
            var mid = this.y;
        }
        else
        {
            var mid = this.z;
        }
    }
    else if(min == this.y)
    {
        if(this.x < this.z)
        {
            var mid = this.x;
        }
        else
        {
            var mid = this.z;
        }
    }
    else
    {
        if(this.x < this.y)
        {
            var mid = this.x;
        }
        else
        {
            var mid = this.y;
        }
    }

    return mid;
}

Vec3.prototype.max = function()
{
    var max = this.x
    if(max < this.y)
    {
        max = this.y;
    }
    if(max < this.z)
    {
        max = this.z;
    }
    return max;
}
