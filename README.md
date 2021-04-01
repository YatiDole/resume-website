# Resume-website
Front end repository for AWS implementation of resume website

<b> index.html </b>
* Contains HTML file which is hosted as a static website.

<b> style.css </b>
* Used for formatting layout of the page.

<b> visitor_counter.js </b>
* Javascript function to make api call once somebody visits the website.

<b> Images </b>
* Contains images required for webpage.

<b> main.yml </b>
* Github Actions workflow for CI/CD to frontend.

## Frontend consists of AWS S3,CloudFront and Route53. We make use of Amazon Certificate Manager to provide SSL Encryption.

# S3 Bucket static Website hosting.

* Deploy the webpage contents such as index.html ,style.css and visitor_counter.js to S3 bucket called example.com.
* Create a similar subdomain bucket called www.example.com .
* 
![S3_bucket_web](https://user-images.githubusercontent.com/57376468/113256340-acf9de80-928e-11eb-996d-dc7158ab2a4f.PNG)

# CloudFront Distribution

* Create a cloudfront distribution to redirect-http to https and make sure that the bucket is only accessed by cloudfront Arn. 
* Set the cloudFront links in the NameServer of your Custom Domain Name space.

![cloudfront](https://user-images.githubusercontent.com/57376468/113256209-79b74f80-928e-11eb-9ed2-c1e0320fae8c.PNG)

# Route53 HostedZone
* Once the bucket and the cloudfront distribution url is set we need to create a Route53 HostedZone.
* Create a recordname for each url (cloudfront,subdomain,domain). 
* Use Simple Routing Policy.

![route53](https://user-images.githubusercontent.com/57376468/113256106-54c2dc80-928e-11eb-8076-f6897f7b7180.PNG)

# Amazon Certificate Manager
* The url will be secure once we attach Amazon issued certificate.
* The advantage of SSL Encryption is that data transmission to and from the visitor is safe and protected.
* Not just that a visitor is always trustworthy when he looks at https over http.

![ACM2](https://user-images.githubusercontent.com/57376468/113255917-09a8c980-928e-11eb-828c-29a0f90c4cb3.PNG)

 #  Pipeline created to upload the frontend code using GitHub Actions.
   Required YAML to create a main.yaml file which uses workflow to :
 * Configure AWS
 * Sync S3 with the latest frontend files.
 * Invalidate Cloudfront Cache to reflect the latest changes on the website.  
 
![cicd-frontend](https://user-images.githubusercontent.com/57376468/113255921-0ad9f680-928e-11eb-9d46-314ece4ca717.PNG)

## Final Page looks like this.

![resume](https://user-images.githubusercontent.com/57376468/113255934-10cfd780-928e-11eb-8712-82b1a5ed8604.PNG)
