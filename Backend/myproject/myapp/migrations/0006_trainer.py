# Generated by Django 5.1.1 on 2024-09-22 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_plan'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trainer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('gender', models.CharField(max_length=20)),
                ('age', models.IntegerField(max_length=100)),
                ('specialization', models.CharField(max_length=200)),
                ('experience', models.IntegerField()),
                ('bio', models.TextField()),
            ],
        ),
    ]