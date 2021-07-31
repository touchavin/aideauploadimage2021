from django.db import models
from django.utils.html import format_html

# Create your models here.
class Image(models.Model):



    job_id = models.CharField(max_length=100, blank=True, null=True)
    job_name = models.CharField(max_length=100, blank=True, null=True)
    job_data = models.DateField(auto_now_add=True)
    job_time = models.TimeField(auto_now_add=True)
    job_officerid = models.CharField(max_length=100, blank=True, null=True)
    job_picture = models.URLField(max_length=500, blank=True, null=True)
    vol_name = models.CharField(max_length=100, blank=True, null=True)
    eq_name = models.CharField(max_length=100, blank=True, null=True)
    subeq_name = models.CharField(max_length=100, blank=True, null=True)
    abnor_name = models.CharField(max_length=100, blank=True, null=True) 
    abnor_other = models.CharField(max_length=200, blank=True, null=True) 
    nameimageold = models.CharField(max_length=100, blank=True, null=True)
    nameimagenew = models.CharField(max_length=100, blank=True, null=True)
    pathimage = models.CharField(max_length=100, blank=True, null=True) #เพิ่ม
    image = models.FileField(upload_to='media/', null=True, blank=True)


    def show_image(self): 
        if self.image:
            return format_html('<img src="%s" height="40px">' % self.image.url) 
        return ''
    show_image.allow_tags = True 
    show_image.short_description = 'Image'
