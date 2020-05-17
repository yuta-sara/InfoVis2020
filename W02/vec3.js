class Vec3
{
    //Constructor
    constructor(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    //Add method
    add(v)
    {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    
    sum()
    {
        return this.x+this.y+this.z;
    }

    min()
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

    mid()
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

    max()
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

    AreaOfTriangle(v1,v2)
    {
        //v0v1 = new Vec3(v1.x-this.x,v1.y-this.y,v1.z-this.z);
        var v0v1_x = v1.x - this.x;
        var v0v1_y = v1.y - this.y;
        var v0v1_z = v1.z - this.z;
        //v0v2 = new Vec3(v2.x-this.x,v2.y-this.y,v2.z-this.z);
        var v0v2_x = v2.x - this.x;
        var v0v2_y = v2.y - this.y;
        var v0v2_z = v2.z - this.z;

        var a = Math.pow(v0v1_x,2) + Math.pow(v0v1_y,2) + Math.pow(v0v1_z,2);
        var a = Math.sqrt(a);

        var b = Math.pow(v0v2_x,2) + Math.pow(v0v2_y,2) + Math.pow(v0v2_z,2);
        var b = Math.sqrt(b)

        var ab = (v0v1_x * v0v2_x) + (v0v1_y * v0v2_y) + (v0v1_z * v0v2_z);
        
        var S = Math.pow(a,2) * Math.pow(b,2) - Math.pow(ab,2);
        var S = Math.sqrt(S)
        var S = S / 2;

        return S;
    }
}