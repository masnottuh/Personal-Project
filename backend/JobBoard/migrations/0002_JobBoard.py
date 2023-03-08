from django.db import migrations

def create_data(apps, schema_editor):
    Student = apps.get_model('JobBoard', 'JobBoard')
    Student(title="Fullstack Developer", location="Remote", level="entry level", details="JoShmo start-up Co is looking for a SUPERSTAR fullstack dev").save()

class Migration(migrations.Migration):

    dependencies = [
        ('JobBoard', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]